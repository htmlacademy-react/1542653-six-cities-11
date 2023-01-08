import store from '../store/store';
import { User } from './user-type';
import { Offer } from './offers-type';
import { Review } from './reviews-type';

export type UserProcess = {
  authorizationStatus: string;
  user: User | null;
  loginErrorStatus: boolean;
};

export type OfferProcess = {
  currentCity: string;
  sortOfferType: string;
  activePlaceCardId: number;
  activePlaceCoordinates: {
    lat: number;
    lng: number;
  } | null;
  offers: Offer[];
  isOffersLoading: boolean;
  isOfferLoaded: boolean;
  offerLoadingErrorStatus: boolean;
  currentOffer: Offer | null;
  currentOfferError: boolean;
  nearbyOffers: Offer[];
};

export type FavoriteOffersProcess = {
  favorites: Offer[];
  favoriteLoadingErrorStatus: boolean;
  changeFavoriteOfferStatusError: boolean;
}

export type ReviewProcess = {
  reviews: Review[];
  reviewErrorStatus: boolean;
  creationCommentErrorStatus: boolean;
  isCommentSent: boolean;
};

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
