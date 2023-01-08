import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { State } from '../types/state';
import { checkLogin, sendComment, logout } from './api-actions';
import { APIRoutes } from '../const';
import { getFakeUser, getFakeCommentTemplate, getFakeReview } from '../mock';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should get response from server with status 200 and auth user data', async () => {
    const store = mockStore();
    const randomUser = getFakeUser();
    mockAPI
      .onGet(APIRoutes.Login)
      .reply(200, randomUser);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkLogin());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkLogin.pending.type,
      checkLogin.fulfilled.type,
    ]);
  });

  it('should have to send a new comment to server and dispatch comment to state', async () => {
    const store = mockStore();
    const randomComment = getFakeCommentTemplate();

    mockAPI
      .onPost(`${APIRoutes.Reviews}/${randomComment.offerId}`)
      .reply(200, [getFakeReview(randomComment)]);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(sendComment(randomComment));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendComment.pending.type,
      sendComment.fulfilled.type,
    ]);
  });

  it('should have to dispatch error, if something will go wrong', async () => {
    const store = mockStore();
    const randomComment = getFakeCommentTemplate();

    mockAPI
      .onPost(`${APIRoutes.Reviews}/${randomComment.offerId}`)
      .reply(400, { error: `Hotel id ${randomComment.offerId} does not exist` });

    expect(store.getActions()).toEqual([]);

    await store.dispatch(sendComment(randomComment));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendComment.pending.type,
      sendComment.rejected.type
    ]);

  });

  it('should have to dispatch logout when Delete /logout', async () => {
    const store = mockStore();

    mockAPI
      .onDelete(APIRoutes.Logout)
      .reply(204);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(logout());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logout.pending.type,
      logout.fulfilled.type,
    ]);

  });

});
