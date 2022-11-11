import cn from 'classnames';

type CityItemProp = {
  cityName: string;
  activeCity: string;
};

const CityItem = ({cityName, activeCity}: CityItemProp): JSX.Element => (
  <li className="locations__item">
    <a className={cn(
      'locations__item-link',
      'tabs__item',
      {'tabs__item--active': cityName === activeCity}
    )}
    href="/#"
    >
      <span>{cityName}</span>
    </a>
  </li>
);

export default CityItem;
