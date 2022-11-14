import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';

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
