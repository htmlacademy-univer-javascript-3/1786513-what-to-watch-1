import { Link } from 'react-router-dom';
import { Movie } from '../../types/films';
import { useState } from 'react';
import VideoPlayer from '../video-player/video-player';

export type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie }: MovieCardProps): JSX.Element {
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const onMouseEnter = () => {
    const id = setTimeout(setIsPlaying, 1000, true);
    setTimeoutId(id);
  };

  const onMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsPlaying(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        {isPlaying ? (
          <VideoPlayer
            src={movie.videoLink}
            posterSrc={movie.previewImage}
            muted
          />
        ) : (
          <img
            src={movie.previewImage}
            alt={movie.description}
            width="280"
            height="175"
          />
        )}
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
