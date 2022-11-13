import cn from 'classnames';
import { SyntheticEvent } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { setCurrentCity } from '../../store/actions';

type CityItemProp = {
  cityName: string;
  activeCity: string;
};

const CityItem = ({cityName, activeCity}: CityItemProp): JSX.Element => {
  const dispatch = useAppDispatch();
  const onCityClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setCurrentCity(cityName));
  };

  return (
    <li className="locations__item" onClick={onCityClick}>
      <a className={cn(
        'locations__item-link',
        'tabs__item',
        {'tabs__item--active': cityName === activeCity}
      )}
      href="/#"
      >
        <span>{cityName}</span>
      </a>
    </li>);
};

export default CityItem;
