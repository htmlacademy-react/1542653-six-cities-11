import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offers-type';

type OfferListProp = {
  offers: Offer[];
  pageName: string;
  onSetActiveCardId: (id: number | null) => void;
};

const OfferList = ({ offers, pageName, onSetActiveCardId }: OfferListProp): JSX.Element => (
  <>
    {offers.map(({ id, price, rating, isFavorite, isPremium, previewImage, title, type }) => (
      <PlaceCard
        id={id}
        key={id}
        type={type}
        title={title}
        price={price}
        rating={rating}
        pageName={pageName}
        isPremium={isPremium}
        isFavorite={isFavorite}
        previewImage={previewImage}
        onSetActiveCardId={onSetActiveCardId}
      />
    ))}
  </>
);

export default OfferList;
