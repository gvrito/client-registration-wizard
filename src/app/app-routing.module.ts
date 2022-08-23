import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ROUTES } from './shared/core/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.clientForm,
    pathMatch: 'full'
  },
  {
    path: ROUTES.clientForm,
    loadChildren: () => import('./features/form-wizard/form-wizard.module').then(m => m.FormWizardModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
