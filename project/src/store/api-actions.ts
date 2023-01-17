import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/films';
import {
  setFilms,
  setDataLoadingStatus,
  requireAuthorization,
  redirectToRoute,
  setUser,
  setComments,
  setFilm,
  setSimilar,
  setPromoFilm,
} from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment';
import { dropToken, saveToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  const { data } = await api.get<Film[]>(APIRoute.Films);
  dispatch(setFilms(data));
  dispatch(setDataLoadingStatus(false));
});

export const fetchFilmAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (filmId, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
  dispatch(setFilm(data));
  dispatch(setDataLoadingStatus(false));
});

export const fetchFilmDetailsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmDetails', async (filmId, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));

  const filmRoute = `${APIRoute.Films}/${filmId}`;

  const { data: film } = await api.get<Film>(filmRoute);
  dispatch(setFilm(film));

  const { data: comments } = await api.get<Comment[]>(
    `${APIRoute.Comments}/${filmId}`
  );
  dispatch(setComments(comments));

  const { data: similar } = await api.get<Film[]>(
    `${filmRoute}${APIRoute.Similar}`
  );
  dispatch(setSimilar(similar));

  dispatch(setDataLoadingStatus(false));
});

export const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  const { data } = await api.get<Film>(APIRoute.Promo);
  dispatch(setPromoFilm(data));
  dispatch(setDataLoadingStatus(false));
});

export const postCommentAction = createAsyncThunk<
  void,
  { comment: string; rating: number; filmId: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postComment',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    await api.post(`${APIRoute.Comments}/${filmId}`, {
      comment,
      rating,
    });
    dispatch(fetchFilmDetailsAction(filmId));
    dispatch(redirectToRoute(`${AppRoute.Films}/${filmId}`));
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(data.token);
  dispatch(setUser(data));
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Root));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUser(null));
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
