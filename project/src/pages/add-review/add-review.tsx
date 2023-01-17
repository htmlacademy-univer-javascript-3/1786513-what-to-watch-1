import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import NotFound from '../not-found/not-found';
import { fetchFilmAction } from '../../store/api-actions';
import { AppRoute } from '../../const';

function AddReview(): JSX.Element {
  const { id } = useParams();

  const { film } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const filmId = Number(id);
    if (filmId && (!film || film.id !== filmId)) {
      dispatch(fetchFilmAction(filmId));
    }
  }, [id, dispatch, film]);

  if (!film) {
    return <NotFound />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.Films}/${id}`}
                  className="breadcrumbs__link"
                >
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.Films}/${id}/review`}
                  className="breadcrumbs__link"
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default AddReview;
