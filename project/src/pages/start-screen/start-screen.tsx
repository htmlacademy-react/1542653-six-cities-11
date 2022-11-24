import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import PageNavigation from '../../components/page-navigation/page-navigation';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import SortForm from '../../components/sort-form/sort-form';
import Spinner from '../../components/spinner/spinner';
import { AppPageName, CITIES } from '../../const';
import { Offer } from '../../types/offers-type';
import { useAppSelector } from '../../hooks/store';
import { getCurrentCity, getCurrentSort, getOfferLoadedStatus } from '../../store/selectors';
import { sortOffer } from '../../util';

type StartScreenProp = {
  offers: Offer[];
};

const StartScreen = ({ offers }: StartScreenProp): JSX.Element => {
  const [activePlaceCardId, setActivePlaceCardId] = useState<number | null>(null);
  const currentCity = useAppSelector(getCurrentCity);
  const placeCount = offers.length;
  const currentSortType = useAppSelector(getCurrentSort);
  const isOfferLoaded = useAppSelector(getOfferLoadedStatus);
  const [firstOffer] = offers;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Main page</title>
      </Helmet>

      <PageHeader>
        <PageNavigation />
      </PageHeader>

      {
        isOfferLoaded
          ?
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <CityList cities={CITIES} />
              </section>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placeCount} places to stay in {currentCity}</b>

                  <SortForm />

                  <div className="cities__places-list places__list tabs__content">

                    <OfferList offers={sortOffer(currentSortType, offers)} pageName={AppPageName.Main} onSetActiveCardId={setActivePlaceCardId}/>

                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    city={firstOffer.city.location}
                    points={offers.map((offer) => ({ locations: { ...offer.location }, id: offer.id }))}
                    selectedPlaceId={activePlaceCardId}
                    isMainPage
                  />
                </div>
              </div>
            </div>
          </main>
          : <Spinner />
      }
    </div>
  );
};

export default StartScreen;
