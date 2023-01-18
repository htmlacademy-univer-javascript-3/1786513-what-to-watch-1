import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Comment } from './comment';
import { Film } from './films';
import { UserData } from './user-data';

export type FilmData = {
  film: Film | null;
  comments: Comment[];
  similar: Film[];
  isDataLoading: boolean;
};

export type MainProcess = {
  films: Film[];
  promoFilm: Film | null;
  genre: string;
  favoriteFilms: Film[];
  isDataLoading: boolean;
};

export type UserProcess = {
  user: UserData | null;
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
