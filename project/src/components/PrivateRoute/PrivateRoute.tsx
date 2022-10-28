import { Navigate } from 'react-router-dom';
import { UserAuthStatus, AppRoute } from '../../const';

type PrivateRouteProp = {
  userAuthStatus: string;
  children: JSX.Element;
}

const PrivateRoute = ({ userAuthStatus, children }: PrivateRouteProp): JSX.Element => (
  userAuthStatus === UserAuthStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
