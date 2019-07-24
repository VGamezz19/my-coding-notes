import { createAction, props } from '@ngrx/store';

import { Company } from '../company.model';

export const addCompany = createAction(
  '[company/API] Add Company',
  props<{ company: Company }>()
);

export const addCompanys = createAction(
  '[company/API] Add Companys',
  props<{ companys: Company[] }>()
);

export const addUserToCompany = createAction(
  '[company/API] Add Company',
  props<{ companyId: string; userId: string }>()
);

export const clearCompanys = createAction('[company/API] Clear Companys');
