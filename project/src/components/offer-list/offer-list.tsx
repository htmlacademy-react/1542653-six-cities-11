import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offers-type';

type OfferListProp = {
  offers: Offer[];
};

const OfferList = ({ offers }: OfferListProp): JSX.Element => (
  <>
    {offers.map(({ id, price, rating, isFavorite, isPremium, previewImage, title, type }) => (
      <PlaceCard
        id={id}
        key={id}
        type={type}
        isMainScreen
        title={title}
        price={price}
        rating={rating}
        isPremium={isPremium}
        isFavorite={isFavorite}
        previewImage={previewImage}
      />
    ))}
  </>
);

export default OfferList;
