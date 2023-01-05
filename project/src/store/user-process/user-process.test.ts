import { userProcess, setLoginError } from './user-process';
import { UserProcess } from '../../types/state';
import { UserAuthStatus } from '../../const';

const initialState: UserProcess = {
  authorizationStatus: UserAuthStatus.Unknown,
  user: null,
  loginErrorStatus: false,
};

describe('Reducer: user-process', () => {
  it('should change error login status', () => {
    expect(userProcess.reducer(initialState, setLoginError(true)))
      .toEqual({ ...initialState, loginErrorStatus: true });
    expect(userProcess.reducer(initialState, setLoginError(false)))
      .toEqual({ ...initialState, loginErrorStatus: false});
  });
});
