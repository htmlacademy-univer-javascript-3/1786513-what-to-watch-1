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
    let isMounted = true;

    // TODO: доработать условие
    if (isMounted && !isNaN(filmId) && (!film || film.id !== filmId)) {
      withDetails
        ? dispatch(fetchFilmDetailsAction(filmId))
        : dispatch(fetchFilmAction(filmId));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, film, filmId, withDetails]);
};
