import { SliceName } from '../../const';
import { State } from '../../types/state';
import { Film } from '../../types/films';

export const getFilms = (state: State): Film[] => state[SliceName.Main].films;
export const getPromoFilm = (state: State): Film | null =>
  state[SliceName.Main].promoFilm;
export const getGenre = (state: State): string => state[SliceName.Main].genre;
export const isMainDataLoading = (state: State): boolean =>
  state[SliceName.Main].isDataLoading;
