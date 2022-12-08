import store from '../store/store';
import { User } from './user-type';
import { Offer } from './offers-type';

export type UserProcess = {
  authorizationStatus: string;
  user: User | null;
};

export type OfferProcess = {
  offers: Offer[];
  isOfferLoaded: boolean;
  offerLoadingErrorStatus: boolean;
  currentOffer: Offer | null;
  currentOfferError: boolean;
  favorites: Offer[];
  favoriteLoadingErrorStatus: boolean;
  changeFavoriteOfferStatusError: boolean;
  nearbyOffers: Offer[];
};

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
