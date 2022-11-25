import { UserAuthStatus, AppRoute } from '../../const';

import { Link } from 'react-router-dom';

type SignInProp = {
  authStatus: string;
}

const SignIn = ({ authStatus }: SignInProp): JSX.Element =>
  UserAuthStatus.Auth === authStatus
    ? (
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        <span className="header__favorite-count">3</span>
      </Link>
    )
    : (
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    );

export default SignIn;
