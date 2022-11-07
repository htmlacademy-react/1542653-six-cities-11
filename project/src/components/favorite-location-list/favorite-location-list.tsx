import { Offer } from '../../types/offers-type';
import FavoriteLocationItem from '../favorite-location-item/favorite-location-item';
import PlaceCard from '../place-card/place-card';
import { AppPageName } from '../../const';

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
        const favoriteOffersForCity = favoriteOffers.filter((offer) => offer.city.name === city);
        const cards = favoriteOffersForCity.map(({id, price, rating, isPremium, isFavorite, previewImage, title, type}) => (
          <PlaceCard
            id={id}
            key={id}
            type={type}
            title={title}
            price={price}
            rating={rating}
            isPremium={isPremium}
            isFavorite={isFavorite}
            previewImage={previewImage}
            pageName={AppPageName.Favorites}
          />
        ));
        return <FavoriteLocationItem key={city} cityName={city}>{cards}</FavoriteLocationItem>;
      })}
    </ul>
  );
};

export default FavoriteLocationList;
