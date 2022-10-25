import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, UserAuthStatus } from '../../const';
import StartScreen from '../../pages/start-screen/start-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import UnexistScreen from '../../pages/unexist-screen/unexist-screen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

type AppProp = {
  placeCount: number;
}

function App({ placeCount }: AppProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<StartScreen placeCount={placeCount}/>} />
        <Route path={AppRoute.Login} element={<AuthScreen />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute userAuthStatus={UserAuthStatus.Unknown}>
            <FavoritesScreen />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Room} element={<RoomScreen />} />
        <Route path='*' element={<UnexistScreen />} />
      </Routes>
      ;
    </BrowserRouter>
  );
}

export default App;
