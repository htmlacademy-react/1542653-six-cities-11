import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';
import { User } from '../types/user-type';

export const setCurrentCity = createAction('setCurrentCity', (city: string) => ({
  payload: {
    city: city
  }
}));

export const setOffers = createAction('setOffers', (offers: Offer[]) => ({
  payload: {
    offers: offers
  }
}));

export const setFavoriteOffers = createAction('setFavoriteOffers', (offers: Offer[]) => ({
  payload: {
    offers: offers
  }
}));

export const setSortType = createAction('setSortType', (type: string) => ({
  payload: {
    type
  }
}));

export const setOfferLoaderStatus = createAction('setOfferLoaderStatus', (status: boolean) => ({
  payload: {
    status
  }
}));

export const setOfferLoadingErrorStatus = createAction('setOfferLoadingErrorStatus', (status: boolean) => ({
  payload: {
    status
  }
}));

export const setAuthStatus = createAction('setAuthStatus', (authStatus: string) => ({
  payload: {
    authStatus
  }
}));

export const setUser = createAction('setUser', (user: User | null) => ({
  payload: {
    user
  }
}));

export const setLoginError = createAction('setLoginError', (errorLoginStatus: boolean) => ({
  payload: {
    errorLoginStatus
  }
}));

export const setLogoutError = createAction('setLogoutError', (errorLogoutStatus: boolean) => ({
  payload: {
    errorLogoutStatus
  }
}));
