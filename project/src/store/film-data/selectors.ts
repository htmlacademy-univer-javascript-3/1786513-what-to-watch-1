import { SliceName } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';
import { Comment } from '../../types/comment';

export const getFilm = (state: State): Film | null =>
  state[SliceName.Film].film;
export const getComments = (state: State): Comment[] =>
  state[SliceName.Film].comments;
export const getSimilar = (state: State): Film[] =>
  state[SliceName.Film].similar;
export const isFilmDataLoading = (state: State): boolean =>
  state[SliceName.Film].isDataLoading;
