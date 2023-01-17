import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks/useAppSelector';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const { isDataLoading, authorizationStatus } = useAppSelector(
    (state) => state
  );

  if (isDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<SignIn />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Films}/:id`} element={<Film />} />
          <Route
            path={`${AppRoute.Films}/:id/review`}
            element={<AddReview />}
          />
          <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
