import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, FilmData, State } from '../types/state';
import { Film } from '../types/films';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute, FilmStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment';
import { dropToken, saveToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<
  Film[],
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film[]>(APIRoute.Films);
  return data;
});

export const fetchFilmAction = createAsyncThunk<
  Film,
  number,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (filmId, { extra: api }) => {
  const { data } = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
  return data;
});

export const fetchFilmDetailsAction = createAsyncThunk<
  Omit<FilmData, 'isDataLoading'>,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmDetails', async (filmId, { extra: api }) => {
  const filmRoute = `${APIRoute.Films}/${filmId}`;

  const { data: film } = await api.get<Film>(filmRoute);
  const { data: comments } = await api.get<Comment[]>(
    `${APIRoute.Comments}/${filmId}`
  );
  const { data: similar } = await api.get<Film[]>(
    `${filmRoute}${APIRoute.Similar}`
  );

  return { film, comments, similar };
});

export const fetchPromoFilmAction = createAsyncThunk<
  Film,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film>(APIRoute.Promo);
  return data;
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

export const fetchFavoriteFilmsAction = createAsyncThunk<
  Film[],
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<Film[]>(`${APIRoute.Favorite}`);
  return data;
});

const changeFavoriteStatus = async (
  api: AxiosInstance,
  dispatch: AppDispatch,
  filmId: number,
  status: FilmStatus
) => {
  const { data } = await api.post<Film>(
    `${APIRoute.Favorite}/${filmId}/${status}`
  );
  dispatch(fetchFavoriteFilmsAction());
  return data;
};

export const changeFavoriteSimpleFilmAction = createAsyncThunk<
  Film,
  { filmId: number; status: FilmStatus },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/changeFavoriteSimpleFilm',
  async ({ filmId, status }, { dispatch, extra: api }) =>
    changeFavoriteStatus(api, dispatch, filmId, status)
);

export const changeFavoritePromoFilmAction = createAsyncThunk<
  Film,
  { filmId: number; status: FilmStatus },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/changeFavoritePromoFilm',
  async ({ filmId, status }, { dispatch, extra: api }) =>
    changeFavoriteStatus(api, dispatch, filmId, status)
);

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  UserData,
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
  dispatch(redirectToRoute(AppRoute.Root));
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
