const Limits = {
  CardQtyOnPage: 5,
  MaxPlaceRating: 5,
  MaxPhotosOnPage: 6,
  MaxCommentsOnPage: 10,
  MinCommentSymbols: 50,
  MaxCommentSymbols: 300,
  RequestTimeout: 5000,
  ErrorDeleteTimeout: 5000,
};

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

enum APIRoutes {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite'
}

enum ServerResponseActions {
  NoContent = 'empty',
  Ready = 'ready',
  Error = 'error',
  Loading = 'loading'
}

enum NameSpaces {
  User = 'USER',
  Offer = 'OFFER',
  Favorite = 'FAVORITE',
  Review = 'REVIEW',
}

const UNKNOWN_ACTION = 'UNKNOWN_ACTION';

export {
  DEFAULT_CITY,
  CITIES,
  DEFAULT_SORT_TYPE,
  SERVER_URL,
  UNKNOWN_ACTION,
  SortType,
  AppRoute,
  UserAuthStatus,
  PlaceRating,
  AppPageName,
  PlaceCardSize,
  APIRoutes,
  ServerResponseActions,
  Limits,
  NameSpaces
};
