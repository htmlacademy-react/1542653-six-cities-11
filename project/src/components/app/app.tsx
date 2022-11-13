import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, UserAuthStatus } from '../../const';
import StartScreen from '../../pages/start-screen/start-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import UnexistScreen from '../../pages/unexist-screen/unexist-screen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Review } from '../../types/reviews-type';
import { useAppSelector } from '../../hooks/store';

type AppProp = {
  reviews: Review[];
}

function App({ reviews }: AppProp): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === currentCity));
  const favoriteOffers = useAppSelector((state) => state.favorites);
  const placeCount = offers.length;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<StartScreen currentCity={currentCity} offers={offers} placeCount={placeCount} />} />
          <Route path={AppRoute.Login} element={<AuthScreen />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute userAuthStatus={UserAuthStatus.Auth}>
              <FavoritesScreen offers={favoriteOffers} />
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
