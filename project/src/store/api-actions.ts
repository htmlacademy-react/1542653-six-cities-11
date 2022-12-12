import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from './../types/state';
import { Offer } from '../types/offers-type';
import { User, UserLogin } from '../types/user-type';
import { CommentTemplateType } from '../types/reviews-type';
import { APIRoutes } from '../const';
import { dropToken, saveToken } from '../services/token';
import { Review } from '../types/reviews-type';

type RequestSettings = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, RequestSettings>(
  'offer/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Offers);
    return data;
  }
);

export const checkLogin = createAsyncThunk<User, undefined, RequestSettings>(
  'user/checkLogin',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoutes.Login);
    return data;
  }
);

export const login = createAsyncThunk<User, UserLogin, RequestSettings>(
  'user/login',
  async (userLoginData, { extra: api }) => {
    const { data } = await api.post<User>(APIRoutes.Login, userLoginData);
    saveToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, RequestSettings>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
  }
);

export const fetchOffer = createAsyncThunk<Offer, number, RequestSettings>(
  'offer/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoutes.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], number, RequestSettings>(
  'offer/fetchNearbyOffers',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoutes.Offers}/${offerId}/nearby`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  state: State;
}>(
  'review/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoutes.Reviews}/${offerId}`);
    return data;
  }
);

export const sendComment = createAsyncThunk<Review[], CommentTemplateType, RequestSettings>(
  'review/sendComment',
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Review[]>(`${APIRoutes.Reviews}/${offerId}`, { comment, rating });
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<Offer[], undefined, RequestSettings>(
  'favorite/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoutes.Favorite);
    return data;
  }
);

export const changeFavoriteOfferStatus = createAsyncThunk<Offer, Offer, RequestSettings>(
  'favorite/changeFavoriteOfferStatus',
  async (offer, { extra: api }) => {
    const { id, isFavorite } = offer;
    const status = isFavorite ? 0 : 1;
    const { data } = await api.post<Offer>(`${APIRoutes.Favorite}/${id}/${status}`, offer);
    return data;
  }
);
