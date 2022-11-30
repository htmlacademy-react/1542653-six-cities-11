import { UserAuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { getUserAuthStatus } from '../../store/selectors';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';

const PageNavigation = (): JSX.Element => {
  const userAuthStatus = useAppSelector(getUserAuthStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <SignIn authStatus={userAuthStatus} />
        </li>
        {userAuthStatus === UserAuthStatus.Auth ?
          <SignOut />
          : undefined}
      </ul>
    </nav>
  );
};

export default PageNavigation;
