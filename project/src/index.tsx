import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import reviews from './mock/reviews';
import store from './store/store';
import { fetchOffers, checkLogin } from './store/api-actions';

store.dispatch(fetchOffers());
store.dispatch(checkLogin());

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
