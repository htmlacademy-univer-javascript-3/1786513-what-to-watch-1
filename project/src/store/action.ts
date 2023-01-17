import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment';

export const setGenre = createAction<{ genre: string }>('film/setGenre');

export const setFilms = createAction<Film[]>('data/setFilms');
export const setFilm = createAction<Film>('data/setFilm');
export const setPromoFilm = createAction<Film>('data/setPromoFilm');
export const setSimilar = createAction<Film[]>('data/setSimilar');
export const setComments = createAction<Comment[]>('data/setComments');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus'
);

export const setUser = createAction<UserData | null>('user/setUser');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<string>('main/redirectToRoute');
