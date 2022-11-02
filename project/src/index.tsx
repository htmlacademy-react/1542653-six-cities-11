import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mock/offers';
import reviews from './mock/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  placeCount: 100,
} as const;

root.render(
  <React.StrictMode>
    <App placeCount={Settings.placeCount} reviews={reviews} offers={offers}/>
  </React.StrictMode>,
);
