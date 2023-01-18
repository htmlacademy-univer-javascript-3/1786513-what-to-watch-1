import { Fragment } from 'react';
import { Film } from '../../types/films';
import DetailsItem from '../details-item/detail-item';

type DetailsProps = {
  film: Film;
};

const convertTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return `${hours}h ${minutes}m`;
};

function Details({ film }: DetailsProps) {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <DetailsItem name="Director" value={film.director} />
        <DetailsItem
          name="Starring"
          value={film.starring.map((star, index) => (
            <Fragment key={star}>
              {star}
              {index < film.starring.length - 1 && (
                <>
                  , <br />
                </>
              )}
            </Fragment>
          ))}
        />
      </div>

      <div className="film-card__text-col">
        <DetailsItem name="Run Time" value={convertTime(film.runTime)} />
        <DetailsItem name="Genre" value={film.genre} />
        <DetailsItem name="Released" value={film.released} />
      </div>
    </div>
  );
}

export default Details;
