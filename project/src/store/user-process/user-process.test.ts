import { userProcess, setLoginError } from './user-process';
import { UserProcess } from '../../types/state';
import { UNKNOWN_ACTION, UserAuthStatus } from '../../const';

const initialState: UserProcess = {
  authorizationStatus: UserAuthStatus.Unknown,
  user: null,
  loginErrorStatus: false,
};

describe('Reducer: user-process', () => {
  it('unknown action should have return initial state', () => {
    const unknownAction = {type: UNKNOWN_ACTION};
    expect(userProcess.reducer(undefined, unknownAction))
      .toEqual(initialState);
  });
  it('should change error login status', () => {
    expect(userProcess.reducer(initialState, setLoginError(true)))
      .toEqual({ ...initialState, loginErrorStatus: true });
    expect(userProcess.reducer(initialState, setLoginError(false)))
      .toEqual({ ...initialState, loginErrorStatus: false});
  });
});
