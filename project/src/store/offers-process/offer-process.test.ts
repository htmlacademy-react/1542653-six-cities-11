import { getRandomCoordinates } from '../../mock';
import { UNKNOWN_ACTION, DEFAULT_CITY, DEFAULT_SORT_TYPE, CITIES, SortType } from '../../const';
import { offerProcess, setCurrentCity, setSortType, setActivePlaceCardId, setActivePlaceCoordinates } from './offer-process';
import { randomInt } from '../../util';

const initialState = {
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

const unknownAction = {type: UNKNOWN_ACTION};

describe('Reducer: OfferProcess', () => {
  it('unknown action should have return initial state', () => {
    expect(offerProcess.reducer(undefined, unknownAction))
      .toEqual(initialState);
  });

  it('should have to change active city', () => {
    CITIES.forEach((city) => {
      expect(offerProcess.reducer(initialState, setCurrentCity(city)))
        .toEqual({...initialState, currentCity: city});
    });
  });

  it('should have to change type of cards sorting', () => {
    const sortTypes = Object.values(SortType);
    sortTypes.forEach((type) => {
      expect(offerProcess.reducer(initialState, setSortType(type)))
        .toEqual({...initialState, sortOfferType: type});
    });
  });

  it('should have to change active card id', () => {
    const randomCardIds = Array.from({length: 5}, () => randomInt(1, 100));
    randomCardIds.forEach((id) => {
      expect(offerProcess.reducer(initialState, setActivePlaceCardId(id)))
        .toEqual({...initialState, activePlaceCardId: id});
    });
  });

  it('should have to change coordinates', () => {
    const coordinates = Array.from({length: 5}, () => getRandomCoordinates());
    coordinates.forEach((item) => {
      expect(offerProcess.reducer(initialState, setActivePlaceCoordinates(item)))
        .toEqual({...initialState, activePlaceCoordinates: item});
    });
  });

});

