import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfoComponent } from './client-info.component';

const routes: Routes = [{ path: '', component: ClientInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientInfoRoutingModule { }
