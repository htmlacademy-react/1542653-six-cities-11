type FavoriteLocationItemProp = {
  cityName: string;
  children: JSX.Element[];
};

const FavoriteLocationItem = ({cityName, children}: FavoriteLocationItemProp): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="/#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {children}
    </div>
  </li>
);

export default FavoriteLocationItem;
