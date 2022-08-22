import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormWizardModule } from './features/form-wizard/form-wizard/form-wizard.module';
import { WizardClientComponent } from './features/form-wizard/wizard-client/wizard-client.component';
import { WizardAddressComponent } from './features/form-wizard/wizard-address/wizard-address.component';
import { WizardIdentityComponent } from './features/form-wizard/wizard-identity/wizard-identity.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardClientComponent,
    WizardAddressComponent,
    WizardIdentityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
