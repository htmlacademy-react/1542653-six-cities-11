import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from './../types/state';
import { Offer } from '../types/offers-type';
import { User, UserLogin } from '../types/user-type';
import { setOffers, setOfferLoaderStatus, setAuthStatus, setUser, setLoginError, setLogoutError, setOfferLoadingErrorStatus } from './actions';
import { APIRoutes, UserAuthStatus } from '../const';
import { dropToken, saveToken } from '../services/token';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoutes.Offers);
      dispatch(setOffers(data));
      dispatch(setOfferLoaderStatus(true));
    } catch {
      dispatch(setOfferLoaderStatus(false));
      dispatch(setOfferLoadingErrorStatus(true));
    }
  }
);

export const checkLogin = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}>(
  'checkLogin',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<User>(APIRoutes.Login);
      dispatch(setAuthStatus(UserAuthStatus.Auth));
      dispatch(setUser(data));
    } catch {
      dispatch(setAuthStatus(UserAuthStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<void, UserLogin, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}>(
  'login',
  async (userLoginData, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<User>(APIRoutes.Login, userLoginData);
      saveToken(data.token);
      dispatch(setUser(data));
      dispatch(setAuthStatus(UserAuthStatus.Auth));
    } catch {
      dispatch(setLoginError(true));
    }
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoutes.Logout);
      dropToken();
      dispatch(setUser(null));
      dispatch(setAuthStatus(UserAuthStatus.NoAuth));
    } catch {
      dispatch(setLogoutError(true));
    }
  }
);
