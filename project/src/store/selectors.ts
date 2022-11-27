import { Offer } from '../types/offers-type';
import { State } from '../types/state';
import { createSelector } from '@reduxjs/toolkit';
import { User } from '../types/user-type';

export const getCurrentCity = (state: State): string => state.currentCity;

export const getOffers = (state: State): Offer[] => state.offers;

export const getFavoriteOffers = (state: State): Offer[] => state.favorites;

export const getCurrentSort = (state: State): string => state.sortOfferType;

export const getFilteredOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, targetCity) => offers.filter((offer) => offer.city.name === targetCity)
);

export const getOfferLoadedStatus = (state: State): boolean => state.isOfferLoaded;

export const getOfferLoadingErrorStatus = (state: State): boolean => state.offerLoadingErrorStatus;

export const getUserAuthStatus = (state: State): string => state.authorizationStatus;

export const getUser = (state: State): User | null => state.user;

