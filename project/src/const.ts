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
  },
};

const DEFAULT_CITY = 'Paris';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_SORT_TYPE = 'Popular';

const SortType = {
  Popular: DEFAULT_SORT_TYPE,
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  Rating: 'Top rated first'
};

enum AppPageName {
  Main = 'Main',
  Favorites = 'Favorites',
  Room = 'Room',
}

const PlaceCardSize = {
  favoriteCardSize: 150,
  mainCardWidth: 260,
  mainCardHeight: 200
};

const SERVER_URL = 'https://11.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
enum APIRoutes {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

enum ServerResponseActions {
  NoContent = 'empty',
  Ready = 'ready',
  Error = 'error',
  Loading = 'loading'
}

export {
  CARD_QTY_ON_PAGE,
  MAX_PLACE_RATING,
  DEFAULT_CITY,
  CITIES,
  DEFAULT_SORT_TYPE,
  SERVER_URL,
  REQUEST_TIMEOUT,
  SortType,
  AppRoute,
  UserAuthStatus,
  PlaceRating,
  AppCitiesCoordinates,
  AppPageName,
  PlaceCardSize,
  APIRoutes,
  ServerResponseActions
};
