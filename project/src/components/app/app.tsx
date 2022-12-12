import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, UserAuthStatus } from '../../const';
import StartScreen from '../../pages/start-screen/start-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import UnexistScreen from '../../pages/unexist-screen/unexist-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getFavoriteOffers } from '../../store/favorite-offers-process/selectors';
import { getUserAuthStatus } from '../../store/user-process/selectors';
import { useEffect } from 'react';
import { fetchFavoriteOffers } from '../../store/api-actions';

const App = (): JSX.Element => {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userAuthStatus = useAppSelector(getUserAuthStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isComponentMounted = true;

    if (isComponentMounted && userAuthStatus === UserAuthStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }
    return () => {
      isComponentMounted = false;
    };
  }, [userAuthStatus, dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<StartScreen />} />
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
};

export default App;
