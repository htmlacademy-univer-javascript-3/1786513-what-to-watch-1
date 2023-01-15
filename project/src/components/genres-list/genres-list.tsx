import { DEFAULT_GENRE } from '../../consts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setGenre } from '../../store/action';
import { Movie } from '../../types/films';

export const getGenres = (movies: Movie[]) => [
  DEFAULT_GENRE,
  ...new Set(movies.map((movie) => movie.genre)),
];

function GenresList() {
  const currentGenre = useAppSelector((state) => state.genre);
  const movies = useAppSelector((state) => state.movies);
  const allGenres = getGenres(movies);
  const dispatch = useAppDispatch();

  const onClick = (genre: string) => {
    dispatch(setGenre({ genre }));
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
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(e) => {
              e.preventDefault();
              onClick(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
