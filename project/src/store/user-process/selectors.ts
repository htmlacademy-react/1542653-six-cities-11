import { User } from '../../types/user-type';
import { NameSpaces } from '../../const';
import { State } from '../../types/state';

export const getUserAuthStatus = (state: State): string => state[NameSpaces.User].authorizationStatus;

export const getUser = (state: State): User | null => state[NameSpaces.User].user;

export const getLoginErrorStatus = (state: State) => state[NameSpaces.User].loginErrorStatus;
