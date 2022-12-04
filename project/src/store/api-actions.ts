import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from './../types/state';
import { Offer } from '../types/offers-type';
import { User, UserLogin } from '../types/user-type';
import { CommentTemplateType } from '../types/reviews-type';
import {
  setOffers,
  setOfferLoaderStatus,
  setAuthStatus,
  setUser,
  setLoginError,
  setLogoutError,
  setOfferLoadingErrorStatus,
  setCurrentOffer,
  setCurrentOfferError,
  setReviews,
  setReviewErrorStatus,
  setNearbyOffers,
  setCreationCommentErrorStatus,
  setFavoriteOffers,
  setLoadingFavoriteErrorStatus,
  setCommentStatus,
  updateOffers,
  updateFavoriteOffers
} from './actions';
import { APIRoutes, Limits, UserAuthStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { Review } from '../types/reviews-type';

type RequestSettings = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}


export const fetchOffers = createAsyncThunk<void, undefined, RequestSettings>(
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

export const checkLogin = createAsyncThunk<void, undefined, RequestSettings>(
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

export const login = createAsyncThunk<void, UserLogin, RequestSettings>(
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

export const logout = createAsyncThunk<void, undefined, RequestSettings>(
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

export const fetchOffer = createAsyncThunk<void, number, RequestSettings>(
  'fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoutes.Offers}/${offerId}`);
      dispatch(setCurrentOffer(data));
    } catch {
      dispatch(setCurrentOfferError(true));
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<void, number, RequestSettings>(
  'fetchNearbyOffers',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoutes.Offers}/${offerId}/nearby`);
    dispatch(setNearbyOffers(data));
  }
);

export const fetchReviews = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}>(
  'fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Review[]>(`${APIRoutes.Reviews}/${offerId}`);
      dispatch(setReviews(data));
    } catch {
      dispatch(setReviewErrorStatus(true));
    }
  }
);

export const sendComment = createAsyncThunk<void, CommentTemplateType, RequestSettings>(
  'sendComment',
  async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Review[]>(`${APIRoutes.Reviews}/${offerId}`, { comment, rating });
      dispatch(setReviews(data));
      dispatch(setCommentStatus(true));
    } catch {
      dispatch(setCreationCommentErrorStatus(true));
      dispatch(setCommentStatus(false));
      setTimeout(() => {
        dispatch(setCreationCommentErrorStatus(false));
      }, Limits.ErrorDeleteTimeout);
    }
  }
);

export const fetchFavoriteOffers = createAsyncThunk<void, undefined, RequestSettings>(
  'fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoutes.Favorite);
      dispatch(setFavoriteOffers(data));
    } catch {
      dispatch(setLoadingFavoriteErrorStatus(true));
    }
  }
);

export const changeFavoriteOfferStatus = createAsyncThunk<void, Offer, RequestSettings>(
  'changeFavoriteOfferStatus',
  async (offer, {dispatch, extra: api}) => {
    try {
      const { id, isFavorite } = offer;
      const status = isFavorite ? 0 : 1;
      const { data } = await api.post<Offer>(`${APIRoutes.Favorite}/${id}/${status}`, offer);
      dispatch(setCurrentOffer(data));
      dispatch(updateOffers(data));
      dispatch(updateFavoriteOffers(data));
    } catch {
      throw new Error('error');
    }
  }
);
