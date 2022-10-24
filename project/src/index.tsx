import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  placeCount: 100,
} as const;

root.render(
  <React.StrictMode>
    <App placeCount={Settings.placeCount}/>
  </React.StrictMode>,
);
