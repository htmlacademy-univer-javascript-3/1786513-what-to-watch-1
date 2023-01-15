import { Movie } from '../../types/films';

type OverviewProps = {
  movie: Movie;
};

const convertRating = (rating: number): string => {
  if (rating >= 0 && rating <= 2) {
    return 'Bad';
  }
  if (rating >= 3 && rating <= 4) {
    return 'Normal';
  }
  if (rating >= 5 && rating <= 7) {
    return 'Good';
  }
  if (rating >= 8 && rating <= 9) {
    return 'Very good';
  }
  if (rating === 10) {
    return 'Awesome';
  }
  return 'Unknown';
};

function Overview({ movie }: OverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {convertRating(movie.rating)}
          </span>
          <span className="film-rating__count">
            {movie.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{movie.description}</p>

        <p className="film-card__director">
          <strong>Director: {movie.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {movie.starring.slice(0, 3).join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
