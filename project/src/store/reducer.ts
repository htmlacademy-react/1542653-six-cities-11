import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';
import {
  setCurrentCity,
  setOffers,
  setFavoriteOffers,
  setSortType
} from './actions';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from './../const';

type InitialState = {
  currentCity: string;
  offers: Offer[];
  favorites: Offer[];
  sortOfferType: string;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  favorites: [],
  sortOfferType: DEFAULT_SORT_TYPE
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
    });
});

export default reducer;
