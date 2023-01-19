import { Link, useParams } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFound from '../not-found/not-found';
import {
  getComments,
  getFilm,
  getSimilar,
  isFilmDataLoading,
} from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { useFilm } from '../../hooks/useFilmDetails';
import Footer from '../../components/footer/footer';
import MyListButton from '../../components/my-list-button/my-list-button';

function Film(): JSX.Element {
  const { id } = useParams();

  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getComments);
  const similar = useAppSelector(getSimilar);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoading = useAppSelector(isFilmDataLoading);

  useFilm(Number(id), film, true);

  if (isDataLoading) {
    return <LoadingScreen />;
  }

  if (!film) {
    return <NotFound />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`${AppRoute.Player}/${film.id}`}
                  className="btn btn--play film-card__button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton film={film} />
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link
                    to={`${AppRoute.Films}/${film.id}/review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <Tabs film={film} comments={comments} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similar.slice(0, 4)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
