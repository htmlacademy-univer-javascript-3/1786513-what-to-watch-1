import { Link, useParams } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useEffect } from 'react';
import { fetchFilmDetailsAction } from '../../store/api-actions';
import NotFound from '../not-found/not-found';
import { useAppDispatch } from '../../hooks/useAppDispatch';

function Film(): JSX.Element {
  const { id } = useParams();

  const { film, comments, similar, authorizationStatus } = useAppSelector(
    (state) => state
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const filmId = Number(id);
    if (filmId && (!film || film.id !== filmId)) {
      dispatch(fetchFilmDetailsAction(filmId));
    }
  }, [dispatch, film, id]);

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
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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

        <footer className="page-footer">
          <Logo forFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Film;
