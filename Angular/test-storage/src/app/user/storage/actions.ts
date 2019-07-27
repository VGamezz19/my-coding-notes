import { createAction, props } from '@ngrx/store';

import { User } from '../user.model';

export const addUser = createAction(
  '[User/API] Add User',
  props<{ user: User }>()
);
export const addUsers = createAction(
  '[User/API] Add Users',
  props<{ users: User[] }>()
);

export const increment = createAction('[User/API] Add Users');

export const clearUsers = createAction('[User/API] Clear Users');
