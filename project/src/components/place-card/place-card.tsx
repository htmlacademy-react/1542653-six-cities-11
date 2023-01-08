import { memo } from 'react';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { getPercent } from '../../util';
import { AppPageName, AppRoute, PlaceCardSize, UserAuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { changeFavoriteOfferStatus } from '../../store/api-actions';
import { setActivePlaceCardId, setActivePlaceCoordinates } from '../../store/offers-process/offer-process';
import { Offer } from '../../types/offers-type';
import { getUserAuthStatus } from '../../store/user-process/selectors';

type PlaceCardProp = {
  offer: Offer;
  pageName: string;
  isActive: boolean;
};


const PlaceCard = ({ offer, pageName, isActive }: PlaceCardProp): JSX.Element => {
  const { id, price, rating, isPremium, isFavorite, previewImage, title, type, location } = offer;
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector(getUserAuthStatus);
  const navigate = useNavigate();

  const handleCardMouseEventEnter = () => {
    dispatch(setActivePlaceCardId(id));
    dispatch(setActivePlaceCoordinates({
      lat: location.latitude,
      lng: location.longitude,
    }));
  };

  const handleCardMouseEventLeave = () => {
    dispatch(setActivePlaceCardId(0));
  };

  const handleFavoriteButtonClick = () => {
    if (userStatus === UserAuthStatus.Auth) {
      dispatch(changeFavoriteOfferStatus(offer));
      return;
    }
    navigate(AppRoute.Login);
  };

  return (
    <article
      className={cn(
        'place-card',
        { 'cities__card': pageName === AppPageName.Main },
        { 'favorites__card': pageName === AppPageName.Favorites },
        { 'near-places__card': pageName === AppPageName.Room })}
      onMouseEnter={handleCardMouseEventEnter}
      onMouseLeave={handleCardMouseEventLeave}
      style={isActive ? { opacity: '0.6' } : { opacity: '1' }}
    >
      {isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : isPremium}
      <div className={cn(
        'place-card__image-wrapper',
        { 'cities__image-wrapper': pageName === AppPageName.Main },
        { 'favorites__image-wrapper': pageName === AppPageName.Favorites },
        { 'near-places__image-wrapper': pageName === AppPageName.Room })}
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
          <button className={
            cn(
              'place-card__bookmark-button',
              'button',
              { 'place-card__bookmark-button--active': isFavorite }
            )
          }
          type="button"
          onClick={handleFavoriteButtonClick}
          >
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

export default memo(PlaceCard);
