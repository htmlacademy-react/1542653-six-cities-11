import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';
import { User } from '../types/user-type';
import {
  setCurrentCity,
  setOffers,
  setFavoriteOffers,
  setSortType,
  setOfferLoaderStatus,
  setAuthStatus,
  setUser,
  setLoginError,
  setLogoutError,
  setOfferLoadingErrorStatus
} from './actions';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE, UserAuthStatus } from './../const';

type InitialState = {
  currentCity: string;
  offers: Offer[];
  favorites: Offer[];
  sortOfferType: string;
  isOfferLoaded: boolean;
  offerLoadingErrorStatus: boolean;
  authorizationStatus: string;
  user: User | null;
  loginErrorStatus: boolean;
  logoutErrorStatus: boolean;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  favorites: [],
  sortOfferType: DEFAULT_SORT_TYPE,
  isOfferLoaded: false,
  offerLoadingErrorStatus: false,
  authorizationStatus: UserAuthStatus.Unknown,
  user: null,
  loginErrorStatus: false,
  logoutErrorStatus: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favorites = action.payload.offers;
    })
    .addCase(setSortType, (state, action) => {
      state.sortOfferType = action.payload.type;
    })
    .addCase(setOfferLoaderStatus, (state, action) => {
      state.isOfferLoaded = action.payload.status;
    })
    .addCase(setOfferLoadingErrorStatus, (state, action) => {
      state.offerLoadingErrorStatus = action.payload.status;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload.user;
    })
    .addCase(setLoginError, (state, action) => {
      state.loginErrorStatus = action.payload.errorLoginStatus;
    })
    .addCase(setLogoutError, (state, action) => {
      state.logoutErrorStatus = action.payload.errorLogoutStatus;
    });
});

export default reducer;
