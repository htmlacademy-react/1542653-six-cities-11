import { Helmet } from 'react-helmet-async';
import FavoriteLocationList from '../../components/favorite-location-list/favorite-location-list';
import PageHeader from '../../components/page-header/page-header';
import PageNavigation from '../../components/page-navigation/page-navigation';
import FavoriteEmptyMessage from '../../components/favorites-empty-message/favorites-empty-message';
import Footer from '../../components/footer/footer';
import { Offer } from '../../types/offers-type';

type FavoriteScreenProp = {
  offers: Offer[];
};

const FavoritesScreen = ({ offers }: FavoriteScreenProp): JSX.Element => {
  const isEmptyFavorite = !offers.length;
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Your favorite places</title>
      </Helmet>

      <PageHeader>
        <PageNavigation />
      </PageHeader>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className={`favorites ${!isEmptyFavorite ? 'favorites--empty' : ''}`}>
            <h1 className={`${!isEmptyFavorite ? 'favorites__title' : 'visually-hidden'}`}>Saved listing</h1>
            {!isEmptyFavorite ? <FavoriteLocationList offers={offers} /> : <FavoriteEmptyMessage />}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FavoritesScreen;
