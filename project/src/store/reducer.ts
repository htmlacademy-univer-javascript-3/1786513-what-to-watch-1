import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../consts';
import { setGenre, setFilms, setDataLoadingStatus } from './action';
import { Film } from '../types/films';

type InitialState = {
  films: Film[];
  promoFilm: Film | null;
  genre: string;
  isDataLoading: boolean;
};

const initialState: InitialState = {
  films: [],
  promoFilm: null,
  genre: DEFAULT_GENRE,
  isDataLoading: false,
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
    });
});
