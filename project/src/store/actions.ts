import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';
import { Review } from '../types/reviews-type';
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

export const setCurrentOffer = createAction('setCurrentOffer', (offer: Offer | null) => ({
  payload: {
    offer
  }
}));

export const setCurrentOfferError = createAction('currentOfferError', (offerErrorStatus: boolean) => ({
  payload: {
    offerErrorStatus
  }
}));

export const setReviews = createAction('setReviews', (reviews: Review[] | null) => ({
  payload: {
    reviews
  }
}));

export const setReviewErrorStatus = createAction('setReviewStatus', (status: boolean) => ({
  payload: {
    status
  }
}));

export const setNearbyOffers = createAction('setNearbyOffers', (offers: Offer[]) => ({
  payload: {
    offers
  }
}));

export const setCreationCommentErrorStatus = createAction('setCreationCommentErrorStatus', (status: boolean) => ({
  payload: {
    status
  }
}));

export const setLoadingFavoriteErrorStatus = createAction('setLoadingFavoriteErrorStatus', (status: boolean) => ({
  payload: {
    status
  }
}));

export const setCommentStatus = createAction('setCommentStatus', (status: boolean) => ({
  payload: {
    status
  }
}));

export const updateOffers = createAction('updateOffers', (updateOffer: Offer) => ({
  payload: {
    updateOffer
  }
}));

export const updateFavoriteOffers = createAction('updateFavoriteOffers', (updateOffer: Offer) => ({
  payload: {
    updateOffer
  }
}));

export const setActivePlaceCardId = createAction('setActivePlaceCardId', (activeCardId: number) => ({
  payload: {
    activeCardId
  }
}));
