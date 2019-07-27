import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { NgTestPipePipe } from './ng-test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NestedFormComponent,
    FormBuilderComponent,
    DinamicFormComponent,
    NgTestPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
