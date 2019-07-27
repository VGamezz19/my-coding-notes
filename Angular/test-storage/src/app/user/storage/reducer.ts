import { createReducer, on } from '@ngrx/store';
import * as UserActions from './actions';
import { User } from '../user.model';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => {
    state.push(user);
    return state;
  }),
  on(UserActions.addUsers, (state, { users }) => {
    return state.concat(users);
  }),
  on(UserActions.clearUsers, () => [])
);
