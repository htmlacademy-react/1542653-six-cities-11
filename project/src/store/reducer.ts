import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';
import {
  setCurrentCity,
  setOffers,
  setFavoriteOffers,
  setSortType,
  setOfferLoaderStatus
} from './actions';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from './../const';

type InitialState = {
  currentCity: string;
  offers: Offer[];
  favorites: Offer[];
  sortOfferType: string;
  isOfferLoaded: boolean;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  favorites: [],
  sortOfferType: DEFAULT_SORT_TYPE,
  isOfferLoaded: false
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
    });
});

export default reducer;
