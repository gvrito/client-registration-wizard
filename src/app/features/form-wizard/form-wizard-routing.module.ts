import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/shared/core/constants';
import { AddressGuard } from 'src/app/shared/guards/address.guard';
import { IdentityGuard } from 'src/app/shared/guards/identity.guard';
import { FormWizardComponent } from './form-wizard.component';
import { WizardAddressComponent } from './wizard-address/wizard-address.component';
import { WizardClientComponent } from './wizard-client/wizard-client.component';
import { WizardIdentityComponent } from './wizard-identity/wizard-identity.component';

const routes: Routes = [
  {
    path: '',
    component: FormWizardComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTES.client,
        pathMatch: 'full'
      },
      {
        path: ROUTES.client,
        component: WizardClientComponent
      },
      {
        path: ROUTES.address,
        component: WizardAddressComponent,
        canActivate: [AddressGuard]
      },
      {
        path: ROUTES.identity,
        component: WizardIdentityComponent,
        canActivate: [IdentityGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormWizardRoutingModule { }
