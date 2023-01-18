export const DEFAULT_GENRE = 'All genres';
export const DEFAULT_SHOWN_COUNT = 8;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Films = '/films',
  Player = '/player',
}

export enum APIRoute {
  Films = '/films',
  Similar = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SliceName {
  Film = 'FILM',
  Main = 'MAIN',
  User = 'USER',
}

export enum FilmStatus {
  Delete = 0,
  Add = 1,
}
