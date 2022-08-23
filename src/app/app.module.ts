import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormWizardModule } from './features/form-wizard/form-wizard.module';
import { UntypedFormBuilder } from '@angular/forms';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormWizardModule
  ],
  providers: [UntypedFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
