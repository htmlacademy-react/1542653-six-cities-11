import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import offers from './mock/offers';
import reviews from './mock/reviews';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  placeCount: 100,
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App placeCount={Settings.placeCount} reviews={reviews} offers={offers}/>
    </Provider>
  </React.StrictMode>,
);
