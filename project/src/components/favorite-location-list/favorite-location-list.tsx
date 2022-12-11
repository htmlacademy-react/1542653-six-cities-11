import { memo } from 'react';
import { Offer } from '../../types/offers-type';
import FavoriteLocationItem from '../favorite-location-item/favorite-location-item';

type FavoriteLocationListProp = {
  offers: Offer[];
}

const FavoriteLocationList = ({ offers }: FavoriteLocationListProp): JSX.Element => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const uniqCities = new Set<string>();
  favoriteOffers.forEach((offer) => uniqCities.add(offer.city.name));
  const cities = [...uniqCities];

  return (
    <ul className="favorites__list">
      {cities.map((city) => {
        const favoriteOffersByCity = favoriteOffers.filter((offer) => offer.city.name === city);
        return <FavoriteLocationItem key={city} cityName={city} favoriteOffersByCity={favoriteOffersByCity}></FavoriteLocationItem>;
      })}
    </ul>
  );
};

export default memo(FavoriteLocationList);
