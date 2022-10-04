import MovieCard, {
  MovieCardProps,
} from '../../components/movie-card/movie-card';

export type MainProps = {
  name: string;
  genre: string;
  releaseYear: number;
};

function Main({ name, genre, releaseYear }: MainProps): JSX.Element {
  const fakeMoviesInfo: MovieCardProps[] = [
    {
      imgFileName: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
      title: 'Fantastic Beasts: The Crimes of Grindelwald',
    },
    { imgFileName: 'bohemian-rhapsody.jpg', title: 'Bohemian Rhapsody' },
    { imgFileName: 'macbeth.jpg', title: 'Macbeth' },
    { imgFileName: 'aviator.jpg', title: 'Aviator' },
    {
      imgFileName: 'we-need-to-talk-about-kevin.jpg',
      title: 'We need to talk about Kevin',
    },
    {
      imgFileName: 'what-we-do-in-the-shadows.jpg',
      title: 'What We Do in the Shadows',
    },
    { imgFileName: 'revenant.jpg', title: 'Revenant' },
    { imgFileName: 'johnny-english.jpg', title: 'Johnny English' },
    { imgFileName: 'shutter-island.jpg', title: 'Shutter Island' },
    { imgFileName: 'pulp-fiction.jpg', title: 'Pulp Fiction' },
    {
      imgFileName: 'no-country-for-old-men.jpg',
      title: 'No Country for Old Men',
    },
    { imgFileName: 'snatch.jpg', title: 'Snatch' },
    { imgFileName: 'moonrise-kingdom.jpg', title: 'Moonrise Kingdom' },
    { imgFileName: 'seven-years-in-tibet.jpg', title: 'Seven Years in Tibet' },
    { imgFileName: 'midnight-special.jpg', title: 'Midnight Special' },
    { imgFileName: 'war-of-the-worlds.jpg', title: 'War of the Worlds' },
    { imgFileName: 'dardjeeling-limited.jpg', title: 'Dardjeeling Limited' },
    { imgFileName: 'orlando.jpg', title: 'Orlando' },
    { imgFileName: 'mindhunter.jpg', title: 'Mindhunter' },
    { imgFileName: 'midnight-special.jpg', title: 'Midnight Special' },
  ];

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids & Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>

          <div className="catalog__films-list">
            {fakeMoviesInfo.map(({ title, imgFileName, imgAlt }) => (
              <MovieCard
                key={title}
                title={title}
                imgFileName={imgFileName}
                imgAlt={imgAlt}
              />
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
