import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment';

export const setFilm = createAction<Film>('film/setFilm');
export const setSimilar = createAction<Film[]>('film/setSimilar');
export const setComments = createAction<Comment[]>('film/setComments');

export const setUser = createAction<UserData | null>('user/setUser');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<string>('main/redirectToRoute');
