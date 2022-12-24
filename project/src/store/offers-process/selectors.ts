import { createSelector } from '@reduxjs/toolkit';
import { Offer } from '../../types/offers-type';
import { State } from '../../types/state';
import { NameSpaces } from '../../const';

export const getCurrentCity = (state: State): string => state[NameSpaces.Offer].currentCity;

export const getOffers = (state: State): Offer[] => state[NameSpaces.Offer].offers;

export const getOffersLoadingStatus = (state: State): boolean => state[NameSpaces.Offer].isOffersLoading;

export const getOfferLoadedStatus = (state: State): boolean => state[NameSpaces.Offer].isOfferLoaded;

export const getCurrentOffer = (state: State) => state[NameSpaces.Offer].currentOffer;

export const getNerbyOffers = (state: State) => state[NameSpaces.Offer].nearbyOffers;

export const getCurrentOfferErrorStatus = (state: State) => state[NameSpaces.Offer].currentOfferError;

export const getCurrentSort = (state: State): string => state[NameSpaces.Offer].sortOfferType;

export const getOfferLoadingErrorStatus = (state: State): boolean => state[NameSpaces.Offer].offerLoadingErrorStatus;

export const getActivePlaceCardId = (state: State) => state[NameSpaces.Offer].activePlaceCardId;

export const getActivePlaceCoordinates = (state: State) => state[NameSpaces.Offer].activePlaceCoordinates;

export const getFilteredOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, targetCity) => offers.filter((offer) => offer.city.name === targetCity)
);
