import { MouseEvent } from 'react';
import { DEFAULT_GENRE } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Film } from '../../types/films';
import { getFilms, getGenre } from '../../store/main-process/selectors';
import { setGenre } from '../../store/main-process/action';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Link } from 'react-router-dom';

export const getGenres = (films: Film[]) => [
  DEFAULT_GENRE,
  ...new Set(films.map((film) => film.genre)),
];

function GenresList() {
  const currentGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const allGenres = getGenres(films);

  const dispatch = useAppDispatch();

  const handleGenreClick = (
    e: MouseEvent<HTMLAnchorElement>,
    genre: string
  ) => {
    e.preventDefault();
    dispatch(setGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${
            currentGenre === genre ? 'catalog__genres-item--active' : ''
          }`}
        >
          <Link
            to={`?genre=${genre}`}
            className="catalog__genres-link"
            onClick={(e) => handleGenreClick(e, genre)}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
