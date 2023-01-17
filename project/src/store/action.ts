import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';

export const setGenre = createAction<{ genre: string }>('film/setGenre');

export const setFilms = createAction<Film[]>('data/setFilms');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus'
);
