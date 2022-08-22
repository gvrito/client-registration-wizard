import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';
import { WizardAddressComponent } from './wizard-address/wizard-address.component';
import { WizardClientComponent } from './wizard-client/wizard-client.component';
import { WizardIdentityComponent } from './wizard-identity/wizard-identity.component';
import { FormService } from 'src/app/shared/services/form.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    FormWizardComponent,
    WizardAddressComponent,
    WizardClientComponent,
    WizardIdentityComponent,
  ],
  imports: [
    CommonModule,
    FormWizardRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    FormWizardComponent
  ]
})
export class FormWizardModule { }
