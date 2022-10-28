import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mock/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  placeCount: 100,
} as const;

root.render(
  <React.StrictMode>
    <App placeCount={Settings.placeCount} offers={offers}/>
  </React.StrictMode>,
);
