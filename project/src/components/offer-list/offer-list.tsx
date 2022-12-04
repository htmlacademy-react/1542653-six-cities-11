import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offers-type';

type OfferListProp = {
  offers: Offer[];
  pageName: string;
};

const OfferList = ({ offers, pageName }: OfferListProp): JSX.Element => (
  <>
    {offers.map((offer) => (
      <PlaceCard
        key={offer.id}
        offer={offer}
        pageName={pageName}
      />
    ))}
  </>
);

export default OfferList;
