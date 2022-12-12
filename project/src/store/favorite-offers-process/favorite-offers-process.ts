import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { fetchFavoriteOffers, changeFavoriteOfferStatus } from '../api-actions';
import { FavoriteOffersProcess } from '../../types/state';

const initialState:FavoriteOffersProcess = {
  favorites: [],
  favoriteLoadingErrorStatus: false,
  changeFavoriteOfferStatusError: false,
};

export const favoriteOffersProcess = createSlice({
  name: NameSpaces.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.favoriteLoadingErrorStatus = true;
      })
      .addCase(changeFavoriteOfferStatus.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, action.payload]
          .map((offer) => offer.id === action.payload.id ? action.payload : offer)
          .filter((offer) => offer.isFavorite);
      })
      .addCase(changeFavoriteOfferStatus.rejected, (state) => {
        state.changeFavoriteOfferStatusError = true;
      });
  }
});

