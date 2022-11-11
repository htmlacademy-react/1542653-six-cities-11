import CityItem from '../city-item/city-item';

type CityListProp = {
  cities: string[];
}

const CityList = ({cities}: CityListProp): JSX.Element => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => <CityItem key={city} cityName={city} activeCity={'Paris'}/>)}
  </ul>
);

export default CityList;
