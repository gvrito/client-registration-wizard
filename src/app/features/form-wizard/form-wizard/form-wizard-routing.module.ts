import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/shared/core/constants';
import { WizardAddressComponent } from '../wizard-address/wizard-address.component';
import { WizardClientComponent } from '../wizard-client/wizard-client.component';
import { WizardIdentityComponent } from '../wizard-identity/wizard-identity.component';

const routes: Routes = [
  {
    path: ROUTES.address,
    component: WizardAddressComponent
  },
  {
    path: ROUTES.client,
    component: WizardClientComponent
  },
  {
    path: ROUTES.identity,
    component: WizardIdentityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormWizardRoutingModule { }
