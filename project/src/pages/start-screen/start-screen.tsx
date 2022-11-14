import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import PageNavigation from '../../components/page-navigation/page-navigation';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import { AppCitiesCoordinates, AppPageName, CITIES } from '../../const';
import { Offer } from '../../types/offers-type';

type StartScreenProp = {
  placeCount: number;
  offers: Offer[];
  currentCity: string;
};

const StartScreen = ({ placeCount, offers, currentCity }: StartScreenProp): JSX.Element => {
  const [activePlaceCardId, setActivePlaceCardId] = useState<number | null>(null);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Main page</title>
      </Helmet>

      <PageHeader>
        <PageNavigation />
      </PageHeader>

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--closed">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">

                {<OfferList offers={offers} pageName={AppPageName.Main} onSetActiveCardId={setActivePlaceCardId}/>}

              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={AppCitiesCoordinates['Amsterdam']}
                points={offers.map((offer) => ({ locations: { ...offer.location }, id: offer.id }))}
                selectedPlaceId={activePlaceCardId}
                isMainPage
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartScreen;
