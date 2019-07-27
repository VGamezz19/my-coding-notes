import { createReducer, on } from '@ngrx/store';
import * as CompanyActions from './actions';
import { Company } from '../company.model';

export const initialState: Company[] = [];

export const companyReducer = createReducer(
  initialState,
  on(CompanyActions.addCompany, (state, { company }) => {
    state.push(company);
    return state;
  }),
  on(CompanyActions.addCompanys, (state, { companys }) => {
    return state.concat(companys);
  }),
  on(CompanyActions.addUserToCompany, (state, { companyId, userId }) => {
    if (companyId) {
      const currentCompany: Company = state.find(c => c.id === companyId);
      currentCompany.userIds.push(userId);
      return state;
    }
    return state;
  }),
  on(CompanyActions.clearCompanys, () => [])
);
