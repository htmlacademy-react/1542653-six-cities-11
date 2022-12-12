import { Offer } from '../../types/offers-type';
import { AppPageName } from '../../const';
import OfferList from '../offer-list/offer-list';

type FavoriteLocationItemProp = {
  cityName: string;
  favoriteOffersByCity: Offer[];
};

const FavoriteLocationItem = ({ cityName, favoriteOffersByCity }: FavoriteLocationItemProp): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="/#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      <OfferList offers={favoriteOffersByCity} pageName={AppPageName.Favorites} />
    </div>
  </li>
);

export default FavoriteLocationItem;
