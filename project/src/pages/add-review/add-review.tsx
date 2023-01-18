import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks/useAppSelector';
import NotFound from '../not-found/not-found';
import { AppRoute } from '../../const';
import { getFilm, isFilmDataLoading } from '../../store/film-data/selectors';
import { useFilm } from '../../hooks/useFilmDetails';
import LoadingScreen from '../loading-screen/loading-screen';

function AddReview(): JSX.Element {
  const { id } = useParams();

  const film = useAppSelector(getFilm);
  const isDataLoading = useAppSelector(isFilmDataLoading);

  useFilm(Number(id), film);

  if (isDataLoading) {
    return <LoadingScreen />;
  }

  if (!film) {
    return <NotFound />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.Films}/${id}`}
                  className="breadcrumbs__link"
                >
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.Films}/${id}/review`}
                  className="breadcrumbs__link"
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default AddReview;
