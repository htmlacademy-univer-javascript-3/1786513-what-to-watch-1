import { Link } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import GenresList from '../../components/genres-list/genres-list';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Film } from '../../types/films';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { DEFAULT_SHOWN_COUNT } from '../../consts';
import { useEffect, useState } from 'react';

const getFilmsByGenre = (films: Film[], genre: string) => {
  const res = films.slice();
  if (genre === 'All genres') {
    return res;
  }
  return res.filter((film) => film.genre === genre);
};

function Main(): JSX.Element {
  const { films, genre } = useAppSelector((state) => state);
  const [shownCount, setShownCount] = useState(DEFAULT_SHOWN_COUNT);

  useEffect(() => {
    setShownCount(DEFAULT_SHOWN_COUNT);
  }, [genre]);

  const handleShowMoreClick = () => {
    setShownCount(shownCount + DEFAULT_SHOWN_COUNT);
  };

  const filteredFilms = getFilmsByGenre(films, genre);

  // TODO: удалить и заменить на запрос
  const promoFilm = films[0];

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
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
                  to={`/player/${promoFilm.id}`}
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

export default Main;
