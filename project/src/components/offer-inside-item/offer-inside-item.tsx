type OfferInsideItemProp = {
  item: string;
}

const OfferInsideItem = ({ item }: OfferInsideItemProp ):JSX.Element => (
  <li className="property__inside-item">
    {item}
  </li>
);

export default OfferInsideItem;
