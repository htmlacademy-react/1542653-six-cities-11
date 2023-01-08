import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { UserProcess } from '../../types/state';
import { UserAuthStatus } from '../../const';
import { checkLogin, login, logout } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: UserAuthStatus.Unknown,
  user: null,
  loginErrorStatus: false,
};

export const userProcess = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {
    setLoginError: (state, action: PayloadAction<boolean>) => {
      state.loginErrorStatus = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.authorizationStatus = UserAuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkLogin.rejected, (state) => {
        state.authorizationStatus = UserAuthStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = UserAuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = UserAuthStatus.NoAuth;
        state.loginErrorStatus = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = UserAuthStatus.NoAuth;
        state.user = null;
      });
  }
});

export const { setLoginError } = userProcess.actions;
