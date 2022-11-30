import { Link } from 'react-router-dom';
import { UserAuthStatus, AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { getUser } from '../../store/selectors';

type SignInProp = {
  authStatus: string;
}

const SignIn = ({ authStatus }: SignInProp): JSX.Element => {
  const user = useAppSelector(getUser);
  return UserAuthStatus.Auth === authStatus && user
    ? (
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{user.email}</span>
        <span className="header__favorite-count">0</span>
      </Link>
    )
    : (
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    );
};

export default SignIn;
