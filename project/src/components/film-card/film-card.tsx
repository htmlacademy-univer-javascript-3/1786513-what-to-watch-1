import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/films';
import { useState } from 'react';
import VideoPlayer from '../video-player/video-player';
import { AppRoute } from '../../const';

export type FilmCardProps = {
  film: Film;
};

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();

  const handleCardMouseEnter = () => {
    const id = setTimeout(setIsPlaying, 1000, true);
    setTimeoutId(id);
  };

  const handleCardMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsPlaying(false);
  };

  const pathToFilmPage = `${AppRoute.Films}/${film.id}`;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      onClick={() => navigate(pathToFilmPage)}
    >
      <div className="small-film-card__image">
        {isPlaying ? (
          <VideoPlayer
            src={film.videoLink}
            posterSrc={film.previewImage}
            muted
          />
        ) : (
          <img
            src={film.previewImage}
            alt={film.description}
            width="280"
            height="175"
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={pathToFilmPage}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
