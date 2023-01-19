import { Film } from '../../types/films';

type OverviewProps = {
  film: Film;
};

const convertRating = (rating: number): string => {
  if (rating >= 0 && rating <= 2) {
    return 'Bad';
  }
  if (rating > 2 && rating <= 4) {
    return 'Normal';
  }
  if (rating > 4 && rating <= 7) {
    return 'Good';
  }
  if (rating > 7 && rating <= 9) {
    return 'Very good';
  }
  if (rating > 9 && rating <= 10) {
    return 'Awesome';
  }
  return '';
};

function Overview({ film }: OverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating.toFixed(1)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {convertRating(film.rating)}
          </span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {film.starring.slice(0, 3).join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
