import { Location } from './types/offers-type';
const CARD_QTY_ON_PAGE = 5;
const MAX_PLACE_RATING = 5;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

enum UserAuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown'
}

const PlaceRating: {
  [rating: string]: number;
} = {
  'perfect': 5,
  'good': 4,
  'not bad': 3,
  'badly': 2,
  'terribly': 1
};

const AppCitiesCoordinates: {
  [cityName: string]: Location;
} = {
  'Amsterdam': {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

enum AppPageName {
  Main = 'Main',
  Favorites = 'Favorites',
  Room = 'Room',
}

export {
  CARD_QTY_ON_PAGE,
  MAX_PLACE_RATING,
  CITIES,
  AppRoute,
  UserAuthStatus,
  PlaceRating,
  AppCitiesCoordinates,
  AppPageName
};
