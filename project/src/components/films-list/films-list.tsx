import { useState } from 'react';
import { Movie } from '../../types/films';
import MovieCard from '../movie-card/movie-card';

export type FilmsListProps = {
  movies: Movie[];
};

function FilmsList({ movies }: FilmsListProps) {
  const [, setHoveredCardId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          setHoveredCardId={setHoveredCardId}
        />
      ))}
    </div>
  );
}

export default FilmsList;
