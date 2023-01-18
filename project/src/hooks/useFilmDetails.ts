import { useEffect } from 'react';
import { Film } from '../types/films';
import { useAppDispatch } from './useAppDispatch';
import { fetchFilmAction, fetchFilmDetailsAction } from '../store/api-actions';

export const useFilm = (
  filmId: number,
  film: Film | null,
  withDetails?: boolean
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isNaN(filmId) && (!film || film.id !== filmId)) {
      withDetails
        ? dispatch(fetchFilmDetailsAction(filmId))
        : dispatch(fetchFilmAction(filmId));
    }
  }, [dispatch, film, filmId, withDetails]);
};
