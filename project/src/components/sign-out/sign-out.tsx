import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logout } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/store';

const SignOut = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        to={AppRoute.Main}
        onClick={handleLogoutButtonClick}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
};

export default SignOut;
