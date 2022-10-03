export type MovieCardProps = {
  imgFileName: string;
  title: string;
  imgAlt?: string;
};

function MovieCard({
  imgFileName,
  title,
  imgAlt,
}: MovieCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={`img/${imgFileName}`}
          alt={imgAlt || title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
}

export default MovieCard;
