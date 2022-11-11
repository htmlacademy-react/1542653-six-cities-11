import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offers-type';
import {
  setCurrentCity,
  setOffers,
} from './actions';

type InitialState = {
  currentCity: string;
  offers: Offer[];
};

const initialState: InitialState = {
  currentCity: 'Amsterdam',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export default reducer;
