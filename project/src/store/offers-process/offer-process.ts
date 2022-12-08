import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { OfferProcess } from '../../types/state';
import { fetchOffers, fetchOffer, fetchFavoriteOffers, changeFavoriteOfferStatus, fetchNearbyOffers } from '../api-actions';

const initialState: OfferProcess = {
  offers: [],
  isOfferLoaded: false,
  offerLoadingErrorStatus: false,
  currentOffer: null,
  currentOfferError: false,
  favorites: [],
  favoriteLoadingErrorStatus: false,
  changeFavoriteOfferStatusError: false,
  nearbyOffers: [],
};

export const offerProcess = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled , (state, action) => {
        state.offers = action.payload;
        state.isOfferLoaded = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offerLoadingErrorStatus = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.currentOfferError = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.favoriteLoadingErrorStatus = true;
      })
      .addCase(changeFavoriteOfferStatus.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
        state.favorites = [...state.favorites, action.payload]
          .map((offer) => offer.id === action.payload.id ? action.payload : offer)
          .filter((offer) => offer.isFavorite);
      })
      .addCase(changeFavoriteOfferStatus.rejected, (state) => {
        state.changeFavoriteOfferStatusError = true;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});
