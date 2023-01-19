import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { FilmData } from '../../types/state';
import {
  changeFavoriteSimpleFilmAction,
  fetchFilmAction,
  fetchFilmDetailsAction,
} from '../api-actions';

const initialState: FilmData = {
  film: null,
  comments: [],
  similar: [],
  isDataLoading: false,
};

export const filmData = createSlice({
  name: SliceName.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFilmDetailsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmDetailsAction.fulfilled, (state, action) => {
        const { film, comments, similar } = action.payload;
        state.film = film;
        state.comments = comments;
        state.similar = similar;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmDetailsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(changeFavoriteSimpleFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  },
});
