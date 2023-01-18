import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, SliceName } from '../../const';
import { MainProcess } from '../../types/state';
import { fetchFilmsAction, fetchPromoFilmAction } from '../api-actions';
import { setGenre } from './action';

const initialState: MainProcess = {
  films: [],
  promoFilm: null,
  genre: DEFAULT_GENRE,
  isDataLoading: false,
};

export const mainProcess = createSlice({
  name: SliceName.Main,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(setGenre, (state, action) => {
        state.genre = action.payload;
      });
  },
});
