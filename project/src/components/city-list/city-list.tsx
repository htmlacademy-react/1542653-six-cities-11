import { memo } from 'react';
import CityItem from '../city-item/city-item';
import { useAppSelector } from '../../hooks/store';
import { getCurrentCity } from '../../store/offers-process/selectors';

type CityListProp = {
  cities: string[];
}

const CityList = ({cities}: CityListProp): JSX.Element => {
  const currentCity = useAppSelector(getCurrentCity);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityItem key={city} cityName={city} activeCity={currentCity}/>)}
    </ul>
  );
};

export default memo(CityList);
