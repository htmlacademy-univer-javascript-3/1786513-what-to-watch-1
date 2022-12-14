import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { movies } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App promoMovie={movies[0]} movies={movies} />
  </React.StrictMode>
);
