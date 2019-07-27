import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule, CompanyModule, StoreModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
