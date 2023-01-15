import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../consts';
import { setGenre, setMovies } from './action';
import { movies } from '../mocks/films';

const initialState = {
  movies,
  promoMovie: movies[0],
  genre: DEFAULT_GENRE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setMovies, (state, action) => {
      state.movies = action.payload;
    });
});
