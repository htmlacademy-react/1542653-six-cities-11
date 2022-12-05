import './city-places-error.css';

const CityPlaceListError = (): JSX.Element => (
  <div className="cities__places-container cities__places-container--error container">
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">Network Error</b>
        <p className="cities__status-description">Sorry, we could not get any property available from server at the moment. Please, try it again later</p>
      </div>
    </section>
    <div className="cities__right-section"></div>
  </div>
);

export default CityPlaceListError;
