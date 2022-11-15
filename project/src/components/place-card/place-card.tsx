import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPercent } from '../../util';
import { AppPageName, PlaceCardSize } from '../../const';

type PlaceCardProp = {
  id: number;
  pageName: string;
  price: number;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  title: string;
  type: string;
  onSetActiveCardId?: (id: number | null) => void;
};

type ActiveCard = {
  id: number;
  isActive: boolean;
}

const PlaceCard = ({id, pageName, price, rating, isPremium, isFavorite, previewImage, title, type, onSetActiveCardId }: PlaceCardProp): JSX.Element => {
  const [{isActive}, setActive] = useState<ActiveCard>({id, isActive: false});

  const handleMouseEventEnter = () => {
    setActive({id, isActive: true});
    if (onSetActiveCardId) {
      onSetActiveCardId(id);
    }
  };

  const handleMouseEventLeave = () => {
    setActive({id, isActive: false});
    if (onSetActiveCardId) {
      onSetActiveCardId(null);
    }
  };

  return (
    <article
      className={cn(
        'place-card',
        {'cities__card': pageName === AppPageName.Main},
        {'favorites__card': pageName === AppPageName.Favorites},
        {'near-places__card': pageName === AppPageName.Room})}
      onMouseEnter={handleMouseEventEnter}
      onMouseLeave={handleMouseEventLeave}
      style={isActive ? { opacity: '0.6'} : { opacity: '1' }}
    >
      {isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : isPremium}
      <div className={cn(
        'place-card__image-wrapper',
        {'cities__image-wrapper': pageName === AppPageName.Main},
        {'favorites__image-wrapper': pageName === AppPageName.Favorites},
        {'near-places__image-wrapper': pageName === AppPageName.Room})}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={pageName === AppPageName.Favorites ? PlaceCardSize.favoriteCardSize : PlaceCardSize.mainCardWidth}
            height={pageName === AppPageName.Favorites ? PlaceCardSize.favoriteCardSize : PlaceCardSize.mainCardHeight}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getPercent(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
