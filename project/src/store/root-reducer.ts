import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaces } from '../const';
import { offerProcess } from './offers-process/offer-process';
import { favoriteOffersProcess } from './favorite-offers-process/favorite-offers-process';
import { userProcess } from './user-process/user-process';
import { reviewProcess } from './review-process/review-process';

export const rootReducer = combineReducers({
  [NameSpaces.Offer]: offerProcess.reducer,
  [NameSpaces.Favorite]: favoriteOffersProcess.reducer,
  [NameSpaces.User]: userProcess.reducer,
  [NameSpaces.Review]: reviewProcess.reducer
});
