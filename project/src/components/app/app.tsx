import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, UserAuthStatus } from '../../const';
import StartScreen from '../../pages/start-screen/start-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import UnexistScreen from '../../pages/unexist-screen/unexist-screen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getFilteredOffers, getFavoriteOffers, getUserAuthStatus} from '../../store/selectors';
import { useEffect } from 'react';
import { fetchFavoriteOffers } from '../../store/api-actions';

function App(): JSX.Element {
  const offers = useAppSelector(getFilteredOffers);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userAuthStatus = useAppSelector(getUserAuthStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userAuthStatus === UserAuthStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }
  }, [userAuthStatus, dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<StartScreen offers={offers} />} />
          <Route path={AppRoute.Login} element={<AuthScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute userAuthStatus={userAuthStatus}>
              <FavoritesScreen offers={favoriteOffers} />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Room} element={<RoomScreen />} />
          <Route path='*' element={<UnexistScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
