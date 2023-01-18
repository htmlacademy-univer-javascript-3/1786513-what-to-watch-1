import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import {
  checkAuthAction,
  fetchFavoriteFilmsAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
} from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchPromoFilmAction());
store.dispatch(fetchFilmsAction());
// TODO: диспатчичь только в компоненте. Не понял, почему куча раз перерендеривается, как и фильмы без хука
store.dispatch(fetchFavoriteFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
