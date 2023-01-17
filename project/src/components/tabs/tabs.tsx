import { useState } from 'react';
import { Film } from '../../types/films';
import { Comment } from '../../types/comment';
import Details from './details';
import Overview from './overview';
import Reviews from './reviews';

type TabsProps = {
  film: Film;
  comments: Comment[];
};

enum FilmTabs {
  'Overview' = 'Overview',
  'Details' = 'Details',
  'Reviews' = 'Reviews',
}

function Tabs({ film, comments }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<FilmTabs>(FilmTabs.Overview);

  const filmTabsComponents: { [key in FilmTabs]: JSX.Element } = {
    Overview: <Overview film={film} />,
    Details: <Details film={film} />,
    Reviews: <Reviews comments={comments} />,
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
