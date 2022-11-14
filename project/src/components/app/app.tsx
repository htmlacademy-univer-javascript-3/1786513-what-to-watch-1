import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main, { MainProps } from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';

function App({ promoMovie, movies }: MainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<Main promoMovie={promoMovie} movies={movies} />}
          />
          <Route path="login" element={<SignIn />} />
          <Route
            path="mylist"
            element={
              <PrivateRoute>
                <MyList movies={movies} />
              </PrivateRoute>
            }
          />
          <Route
            path="films/:id"
            element={
              <Film movie={movies[0]} likeThisMovies={movies.slice(1)} />
            }
          />
          <Route
            path="films/:id/review"
            element={<AddReview movie={movies[0]} />}
          />
          <Route path="player/:id" element={<Player movie={movies[0]} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
