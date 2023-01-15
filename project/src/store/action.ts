import { createAction } from '@reduxjs/toolkit';
import { Movie } from '../types/films';

export const setGenre = createAction<{ genre: string }>('setGenre');
export const setMovies = createAction<Movie[]>('setMovies');
