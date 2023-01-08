import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE, NameSpaces } from '../../const';
import { OfferProcess } from '../../types/state';
import { fetchOffers, fetchOffer, changeFavoriteOfferStatus, fetchNearbyOffers } from '../api-actions';

const initialState: OfferProcess = {
  currentCity: DEFAULT_CITY,
  sortOfferType: DEFAULT_SORT_TYPE,
  activePlaceCardId: 0,
  activePlaceCoordinates: null,
  offers: [],
  isOffersLoading: false,
  isOfferLoaded: false,
  offerLoadingErrorStatus: false,
  currentOffer: null,
  currentOfferError: false,
  nearbyOffers: [],
};

export const offerProcess = createSlice({
  name: NameSpaces.Offer,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortOfferType = action.payload;
    },
    setActivePlaceCardId: (state, action: PayloadAction<number>) => {
      state.activePlaceCardId = action.payload;
    },
    setActivePlaceCoordinates: (state, action: PayloadAction<{ lat: number; lng: number } | null>) => {
      state.activePlaceCoordinates = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffers.fulfilled , (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
        state.isOfferLoaded = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offerLoadingErrorStatus = true;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.currentOfferError = true;
      })
      .addCase(changeFavoriteOfferStatus.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
        state.nearbyOffers = state.nearbyOffers.find((offer) => offer.id === action.payload.id)
          ? state.nearbyOffers.map((offer) => offer.id === action.payload.id ? action.payload : offer)
          : state.nearbyOffers;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});

export const {setCurrentCity, setSortType, setActivePlaceCardId, setActivePlaceCoordinates} = offerProcess.actions;
