import { useState } from 'react';
import { Movie } from '../../types/films';
import { Review } from '../../types/review';
import Details from './details';
import Overview from './overview';
import Reviews from './reviews';

type TabsProps = {
  movie: Movie;
  reviews: Review[];
};

enum FilmTabs {
  'Overview' = 'Overview',
  'Details' = 'Details',
  'Reviews' = 'Reviews',
}

function Tabs({ movie, reviews }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<FilmTabs>(FilmTabs.Overview);

  const filmTabsComponents: { [key in FilmTabs]: JSX.Element } = {
    Overview: <Overview movie={movie} />,
    Details: <Details movie={movie} />,
    Reviews: <Reviews reviews={reviews} />,
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {[FilmTabs.Overview, FilmTabs.Details, FilmTabs.Reviews].map(
            (tab) => (
              <li
                key={tab}
                className={`film-nav__item ${
                  currentTab === tab ? 'film-nav__item--active' : ''
                }`}
              >
                <button
                  className="film-nav__link"
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
      {filmTabsComponents[currentTab]}
    </div>
  );
}

export default Tabs;
