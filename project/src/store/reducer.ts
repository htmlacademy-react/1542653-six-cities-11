import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';
import {
  setCurrentCity,
  setOffers,
  setFavoriteOffers
} from './actions';
import { DEFAULT_CITY } from './../const';

type InitialState = {
  currentCity: string;
  offers: Offer[];
  favorites: Offer[];
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  favorites: [],
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
    });
});

export default reducer;
