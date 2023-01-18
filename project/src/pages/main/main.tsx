import { Link } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import GenresList from '../../components/genres-list/genres-list';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Film } from '../../types/films';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { AppRoute, DEFAULT_SHOWN_COUNT } from '../../const';
import { useEffect, useState } from 'react';
import UserBlock from '../../components/user-block/user-block';
import NotFound from '../not-found/not-found';
import {
  getFilms,
  getGenre,
  getPromoFilm,
} from '../../store/main-process/selectors';
import Footer from '../../components/footer/footer';
import MyListButton from '../../components/my-list-button/my-list-button';

const getFilmsByGenre = (films: Film[], genre: string) => {
  const res = films.slice();
  if (genre === 'All genres') {
    return res;
  }
  return res.filter((film) => film.genre === genre);
};

function Main(): JSX.Element {
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const genre = useAppSelector(getGenre);

  const [shownCount, setShownCount] = useState(DEFAULT_SHOWN_COUNT);

  useEffect(() => {
    setShownCount(DEFAULT_SHOWN_COUNT);
  }, [genre]);

  if (!promoFilm) {
    return <NotFound />;
  }

  const handleShowMoreClick = () => {
    setShownCount(shownCount + DEFAULT_SHOWN_COUNT);
  };

  const filteredFilms = getFilmsByGenre(films, genre);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm.posterImage}
                alt={promoFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`${AppRoute.Player}/${promoFilm.id}`}
                  className="btn btn--play film-card__button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton film={promoFilm} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmsList films={filteredFilms.slice(0, shownCount)} />

          {shownCount < filteredFilms.length && (
            <ShowMoreButton onClick={handleShowMoreClick} />
          )}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
