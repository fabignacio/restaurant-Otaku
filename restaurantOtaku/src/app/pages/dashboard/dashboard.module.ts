import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimeModule } from '../../prime/prime.module';

import { JefeComponent } from './jefe/jefe.component';
import { CocineroComponent } from './cocinero/cocinero.component';
import { MeseroComponent } from './mesero/mesero.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    JefeComponent,
    CocineroComponent,
    MeseroComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    PrimeModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
