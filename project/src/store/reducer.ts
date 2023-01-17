import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_GENRE } from '../const';
import {
  setGenre,
  setFilms,
  setDataLoadingStatus,
  requireAuthorization,
  setUser,
} from './action';
import { Film } from '../types/films';
import { UserData } from '../types/user-data';

type InitialState = {
  films: Film[];
  promoFilm: Film | null;
  genre: string;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

const initialState: InitialState = {
  films: [],
  promoFilm: null,
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
    });
});
