import {offerProcess} from './offer-process';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../const';

const initialState = {
  currentCity: DEFAULT_CITY,
  sortOfferType: DEFAULT_SORT_TYPE,
  activePlaceCardId: 0,
  offers: [],
  isOffersLoading: false,
  isOfferLoaded: false,
  offerLoadingErrorStatus: false,
  currentOffer: null,
  currentOfferError: false,
  nearbyOffers: [],
};

const unknownAction = {type: 'UNKNOWN_ACTION'};

describe('Reducer: OfferProcess', () => {
  it('unknown action should have return initial state', () => {
    expect(offerProcess.reducer(undefined, unknownAction))
      .toEqual(initialState);
  });
});

