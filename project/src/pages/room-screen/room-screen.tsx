import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import UnexistScreen from '../unexist-screen/unexist-screen';
import PageHeader from '../../components/page-header/page-header';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewList from '../../components/review-list/review-list';
import OfferList from '../../components/offer-list/offer-list';
import OfferPhotoItem from '../../components/offer-photo-item/offer-photo-item';
import OfferInsideItem from '../../components/offer-inside-item/offer-inside-item';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import { AppPageName, AppRoute, UserAuthStatus, Limits } from '../../const';
import { changeFavoriteOfferStatus, fetchNearbyOffers, fetchOffer, fetchReviews } from '../../store/api-actions';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getCurrentOffer, getNerbyOffers, getCurrentOfferErrorStatus } from '../../store/offers-process/selectors';
import { getReviews } from '../../store/review-process/selectors';
import { getUserAuthStatus } from '../../store/user-process/selectors';
import { getPercent, adaptAppartmentType, compareDates } from '../../util';
import cn from 'classnames';
import './room-screen.css';

const RoomScreen = (): JSX.Element => {
  const queryParam = useParams();
  const navigate = useNavigate();
  const id = Number(queryParam.id);

  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getReviews);
  const renderedRewiews = reviews
    ? reviews.slice(0, Limits.MaxCommentsOnPage).sort((review, nextReview) => compareDates(review.date, nextReview.date))
    : [];
  const nearbyOffers = useAppSelector(getNerbyOffers);
  const currentUserAuthStatus = useAppSelector(getUserAuthStatus);
  const currentOfferErrorStatus = useAppSelector(getCurrentOfferErrorStatus);
  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {
    if (currentOffer && currentUserAuthStatus === UserAuthStatus.Auth) {
      dispatch(changeFavoriteOfferStatus(currentOffer));
      return;
    }
    navigate(AppRoute.Login);
  };

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted) {
      window.scrollTo(0, 0);
      dispatch(fetchOffer(id));
      dispatch(fetchReviews(id));
      dispatch(fetchNearbyOffers(id));
    }
    return () => {
      isComponentMounted = false;
    };
  }, [id, dispatch]);

  if (currentOfferErrorStatus) {
    return <UnexistScreen />;
  }

  return currentOffer && reviews && nearbyOffers.length ? (
    <div className="page">
      <Helmet>
        <title>6 cities. Room overview</title>
      </Helmet>

      <PageHeader isNavigationShown />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.slice(0, Limits.MaxPhotosOnPage).map((url) => <OfferPhotoItem key={url} imgUrl={url} type={currentOffer.type} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark" style={!currentOffer.isPremium ? { display: 'none' } : {}}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={
                  cn(
                    'property__bookmark-button',
                    'button',
                    { 'property__bookmark-button--active': currentOffer.isFavorite }
                  )
                }
                type="button"
                onClick={handleFavoriteButtonClick}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: getPercent(currentOffer.rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {adaptAppartmentType(currentOffer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {currentOffer.goods.map((item) => < OfferInsideItem key={item} item={item} />)}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={cn(
                    'property__avatar-wrapper',
                    'user__avatar-wrapper',
                    {'property__avatar-wrapper--pro': currentOffer.host.isPro }
                  )}
                  >
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {currentOffer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">

                <ReviewList reviews={renderedRewiews} />

                {currentUserAuthStatus === UserAuthStatus.Auth ? <CommentForm /> : undefined}

              </section>
            </div>
          </div>

          <Map
            isMainPage={false}
            city={currentOffer.city.location}
            points={[
              ...nearbyOffers.map((offer) => ({ id: offer.id, locations: { ...offer.location } })),
              {id: currentOffer.id, locations: {...currentOffer.location}}
            ]}
            selectedPlaceId={currentOffer.id}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OfferList
                offers={nearbyOffers}
                pageName={AppPageName.Room}
              />

            </div>
          </section>
        </div>
      </main>
    </div>
  )
    : <Spinner />;
};

export default RoomScreen;
