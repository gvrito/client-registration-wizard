import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';
import { WizardAddressComponent } from './wizard-address/wizard-address.component';
import { WizardClientComponent } from './wizard-client/wizard-client.component';
import { WizardIdentityComponent } from './wizard-identity/wizard-identity.component';


@NgModule({
  declarations: [
    FormWizardComponent,
    WizardAddressComponent,
    WizardClientComponent,
    WizardIdentityComponent
  ],
  imports: [
    CommonModule,
    FormWizardRoutingModule
  ],
  exports: [
    FormWizardComponent
  ]
})
export class FormWizardModule { }
