import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import { CompanyModule } from '../company/company.module';
import { UserComponent } from './user.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './storage';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // CompanyModule,
    StoreModule.forFeature('users', userReducer)
  ],
  exports: [UserComponent]
})
export class UserModule {}
