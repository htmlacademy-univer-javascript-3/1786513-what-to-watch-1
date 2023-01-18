import { SliceName } from '../../const';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[SliceName.User].authorizationStatus;
export const getUser = (state: State): UserData | null =>
  state[SliceName.User].user;
