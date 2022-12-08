import { createReducer } from '@reduxjs/toolkit';
// import { Offer } from '../types/offers-type';
// import { User } from '../types/user-type';
import {
  setCurrentCity,
  // setOffers,
  // setFavoriteOffers,
  setSortType,
  // setOfferLoaderStatus,
  // setAuthStatus,
  // setUser,
  setLoginError,
  setLogoutError,
  // setOfferLoadingErrorStatus,
  // setCurrentOffer,
  // setCurrentOfferError,
  setReviews,
  setReviewErrorStatus,
  // setNearbyOffers,
  setCreationCommentErrorStatus,
  setLoadingFavoriteErrorStatus,
  setCommentStatus,
  // updateOffers,
  // updateFavoriteOffers,
  setActivePlaceCardId
} from './actions';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from './../const';
import { Review } from '../types/reviews-type';

type InitialState = {
  currentCity: string;
  // offers: Offer[]; // перенес
  // favorites: Offer[]; // перенес
  sortOfferType: string;
  // isOfferLoaded: boolean; // перенес
  // offerLoadingErrorStatus: boolean; // перенес
  // authorizationStatus: string; // Перенес
  // user: User | null; // Перенес
  loginErrorStatus: boolean;
  logoutErrorStatus: boolean;
  // currentOffer: Offer | null; // перенес
  // currentOfferError: boolean; // перенес
  reviews: Review[] | null;
  reviewErrorStatus: boolean;
  // nearbyOffers: Offer[]; // перенес
  creationCommentErrorStatus: boolean;
  isCommentSent: boolean;
  favoriteLoadingErrorStatus: boolean;
  activePlaceCardId: number;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  // favorites: [],
  sortOfferType: DEFAULT_SORT_TYPE,
  // offers: [],
  // isOfferLoaded: false,
  // offerLoadingErrorStatus: false,
  // authorizationStatus: UserAuthStatus.Unknown,
  // user: null,
  loginErrorStatus: false,
  logoutErrorStatus: false,
  // currentOffer: null,
  // currentOfferError: false,
  reviews: null,
  reviewErrorStatus: false,
  // nearbyOffers: [],
  creationCommentErrorStatus: false,
  isCommentSent: false,
  favoriteLoadingErrorStatus: false,
  activePlaceCardId: 0
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    // .addCase(setOffers, (state, action) => {
    //   state.offers = action.payload.offers;
    // })
    // .addCase(setFavoriteOffers, (state, action) => {
    //   state.favorites = action.payload.offers;
    // })
    .addCase(setSortType, (state, action) => {
      state.sortOfferType = action.payload.type;
    })
    // .addCase(setOfferLoaderStatus, (state, action) => {
    //   state.isOfferLoaded = action.payload.status;
    // })
    // .addCase(setOfferLoadingErrorStatus, (state, action) => {
    //   state.offerLoadingErrorStatus = action.payload.status;
    // })
    // .addCase(setAuthStatus, (state, action) => {
    //   state.authorizationStatus = action.payload.authStatus;
    // })
    // .addCase(setUser, (state, action) => {
    //   state.user = action.payload.user;
    // })
    .addCase(setLoginError, (state, action) => {
      state.loginErrorStatus = action.payload.errorLoginStatus;
    })
    .addCase(setLogoutError, (state, action) => {
      state.logoutErrorStatus = action.payload.errorLogoutStatus;
    })
    // .addCase(setCurrentOffer, (state, action) => {
    //   state.currentOffer = action.payload.offer;
    // })
    // .addCase(setCurrentOfferError, (state, action) => {
    //   state.currentOfferError = action.payload.offerErrorStatus;
    // })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setReviewErrorStatus, (state, action) => {
      state.reviewErrorStatus = action.payload.status;
    })
    // .addCase(setNearbyOffers, (state, action) => {
    //   state.nearbyOffers = action.payload.offers;
    // })
    .addCase(setCreationCommentErrorStatus, (state, action) => {
      state.creationCommentErrorStatus = action.payload.status;
    })
    .addCase(setLoadingFavoriteErrorStatus, (state, action) => {
      state.favoriteLoadingErrorStatus = action.payload.status;
    })
    .addCase(setCommentStatus, (state, action) => {
      state.isCommentSent = action.payload.status;
    })
    // .addCase(updateOffers, (state, action) => {
    //   state.offers = state.offers.map((offer) => offer.id === action.payload.updateOffer.id ? action.payload.updateOffer : offer);
    // })
    // .addCase(updateFavoriteOffers, (state, action) => {
    //   state.favorites = [...state.favorites, action.payload.updateOffer]
    //     .map((offer) => offer.id === action.payload.updateOffer.id ? action.payload.updateOffer : offer)
    //     .filter((offer) => offer.isFavorite);
    // })
    .addCase(setActivePlaceCardId, (state, action) => {
      state.activePlaceCardId = action.payload.activeCardId;
    });
});

export default reducer;
