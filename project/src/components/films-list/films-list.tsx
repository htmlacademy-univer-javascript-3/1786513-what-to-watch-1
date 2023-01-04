import { Movie } from '../../types/films';
import MovieCard from '../movie-card/movie-card';

export type FilmsListProps = {
  movies: Movie[];
};

function FilmsList({ movies }: FilmsListProps) {
  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default FilmsList;
