import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute, FilmStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/main-process/selectors';
import { Film } from '../../types/films';

type MyListButtonProps = {
  film: Film;
};

function MyListButton({ film }: MyListButtonProps) {
  // TODO: починить отображение галочки с количеством
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(
      changeFavoriteStatusAction({
        status: film.isFavorite ? FilmStatus.Delete : FilmStatus.Add,
        filmId: film.id,
      })
    );
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleButtonClick}
    >
      {film.isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MyListButton;
