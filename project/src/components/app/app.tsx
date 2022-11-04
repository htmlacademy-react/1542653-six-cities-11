import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, UserAuthStatus } from '../../const';
import StartScreen from '../../pages/start-screen/start-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import UnexistScreen from '../../pages/unexist-screen/unexist-screen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Offer } from '../../types/offers-type';
import { Review } from '../../types/reviews-type';

type AppProp = {
  placeCount: number;
  offers: Offer[];
  reviews: Review[];
}

function App({ placeCount, offers, reviews }: AppProp): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<StartScreen offers={offers} placeCount={placeCount} />} />
          <Route path={AppRoute.Login} element={<AuthScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute userAuthStatus={UserAuthStatus.Auth}>
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Room} element={<RoomScreen offers={offers} reviews={reviews}/>} />
          <Route path='*' element={<UnexistScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
