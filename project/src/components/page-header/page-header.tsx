import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import PageNavigation from '../page-navigation/page-navigation';

type PageHeaderProp = {
  isNavigationShown: boolean;
}

const PageHeader = ({ isNavigationShown }: PageHeaderProp): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link" to={AppRoute.Main}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        { isNavigationShown ? <PageNavigation/> : undefined }
      </div>
    </div>
  </header>
);

export default memo(PageHeader);
