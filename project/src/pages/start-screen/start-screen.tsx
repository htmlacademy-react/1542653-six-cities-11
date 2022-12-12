import { useEffect } from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import SortForm from '../../components/sort-form/sort-form';
import CityPlacesStub from '../../components/city-places-stub/city-places-stub';
import { AppPageName, CITIES, ServerResponseActions } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { getCurrentCity, getCurrentSort, getActivePlaceCardId, getFilteredOffers, getOffersLoadingStatus } from '../../store/offers-process/selectors';
import { getSortOffer } from '../../util';
import useServerAction from '../../hooks/useServerAction';
import { fetchOffers } from '../../store/api-actions';

const StartScreen = (): JSX.Element => {
  const offers = useAppSelector(getFilteredOffers);
  const isOffersLoading = useAppSelector(getOffersLoadingStatus);
  const currentCity = useAppSelector(getCurrentCity);
  const activePlaceCardId = useAppSelector(getActivePlaceCardId);
  const placeCount = offers.length;
  const currentSortType = useAppSelector(getCurrentSort);
  const location = placeCount ? {...offers[0].city.location} : null;
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && !offers.length && !isOffersLoading) {
      dispatch(fetchOffers());
    }
    return () => {
      isComponentMounted = false;
    };
  }, [dispatch, offers, isOffersLoading]);

  const action = useServerAction(offers);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Main page</title>
      </Helmet>

      <PageHeader isNavigationShown />

      <main className={
        cn(
          'page__main',
          'page__main--index',
          {'page__main--index-empty': action === ServerResponseActions.NoContent},
          {'page__main--index-error': action === ServerResponseActions.Error}
        )
      }
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CITIES} />
          </section>
        </div>
        <div className="cities">
          {
            action === ServerResponseActions.Ready && location
              ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placeCount} places to stay in {currentCity}</b>

                  <SortForm />

                  <div className="cities__places-list places__list tabs__content">

                    <OfferList offers={getSortOffer(currentSortType, offers)} pageName={AppPageName.Main} />

                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    city={location}
                    points={offers.map((offer) => ({ locations: { ...offer.location }, id: offer.id }))}
                    selectedPlaceId={activePlaceCardId}
                    isMainPage
                  />
                </div>
              </div>
              : <CityPlacesStub action={action} />
          }
        </div>
      </main>
    </div>
  );
};

export default StartScreen;
