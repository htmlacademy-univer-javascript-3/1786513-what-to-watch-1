import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_GENRE } from '../const';
import {
  setGenre,
  setFilms,
  setDataLoadingStatus,
  requireAuthorization,
  setUser,
  setFilm,
  setPromoFilm,
  setSimilar,
  setComments,
} from './action';
import { Film } from '../types/films';
import { UserData } from '../types/user-data';
import { Comment } from '../types/comment';

type InitialState = {
  films: Film[];
  film: Film | null;
  promoFilm: Film | null;
  similar: Film[];
  comments: Comment[];
  genre: string;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

const initialState: InitialState = {
  films: [],
  film: null,
  promoFilm: null,
  similar: [],
  comments: [],
  genre: DEFAULT_GENRE,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setSimilar, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    });
});
