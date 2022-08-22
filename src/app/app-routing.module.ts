import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWizardComponent } from './features/form-wizard/form-wizard.component';
import { ROUTES } from './shared/core/constants';

const routes: Routes = [
  {
    path: ROUTES.clientForm,
    component: FormWizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
