import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import reviews from './mock/reviews';
import store from './store/store';
import offers from './mock/offers';
import { setOffers, setFavoriteOffers } from './store/actions';

store.dispatch(setOffers(offers));
store.dispatch(setFavoriteOffers(offers.filter((offer) => offer.isFavorite)));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
);
