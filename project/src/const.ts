const CARD_QTY_ON_PAGE = 5;

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


export {
  CARD_QTY_ON_PAGE,
  AppRoute,
  UserAuthStatus
};
