type OfferPhotoItemProp = {
  imgUrl: string;
  type: string;
}

const OfferPhotoItem = ({ imgUrl, type }: OfferPhotoItemProp) => (
  <div className="property__image-wrapper">
    <img className="property__image" src={imgUrl} alt={type} />
  </div>
);

export default OfferPhotoItem;
