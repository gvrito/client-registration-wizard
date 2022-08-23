import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientInfoRoutingModule } from './client-info-routing.module';
import { ClientInfoComponent } from './client-info.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ClientInfoComponent
  ],
  imports: [
    CommonModule,
    ClientInfoRoutingModule,
    MatCardModule
  ]
})
export class ClientInfoModule { }
