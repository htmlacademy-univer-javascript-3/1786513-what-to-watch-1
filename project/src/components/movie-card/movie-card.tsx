import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/films';

export type MovieCardProps = {
  movie: Movie;
  setHoveredCardId: Dispatch<SetStateAction<number | null>>;
};

function MovieCard({ movie, setHoveredCardId }: MovieCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setHoveredCardId(movie.id)}
      onMouseLeave={() => setHoveredCardId(null)}
    >
      <div className="small-film-card__image">
        <img
          src={movie.previewImage}
          alt={movie.description}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${movie.id}`}>
          {movie.name}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
