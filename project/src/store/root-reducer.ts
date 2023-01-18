import { combineReducers } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { filmData } from './film-data/film-data';
import { mainProcess } from './main-process/main-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [SliceName.Film]: filmData.reducer,
  [SliceName.Main]: mainProcess.reducer,
  [SliceName.User]: userProcess.reducer,
});
