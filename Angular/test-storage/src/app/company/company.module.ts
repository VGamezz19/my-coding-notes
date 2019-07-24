import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { UserModule } from '../user/user.module';

import { StoreModule } from '@ngrx/store';
import { companyReducer } from './storage';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    UserModule,
    StoreModule.forFeature('companys', companyReducer)
  ],
  exports: [CompanyComponent]
})
export class CompanyModule {}
