import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const setGenre = createAction<{ genre: string }>('film/setGenre');

export const setFilms = createAction<Film[]>('data/setFilms');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus'
);

export const setUser = createAction<UserData>('user/setUser');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
