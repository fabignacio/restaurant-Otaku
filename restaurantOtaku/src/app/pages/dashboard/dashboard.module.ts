import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimeModule } from '../../prime/prime.module';

import { JefeComponent } from './jefe/jefe.component';
import { CocineroComponent } from './cocinero/cocinero.component';
import { MeseroComponent } from './mesero/mesero.component';
import { MainComponent } from './main/main.component';
import { AgregarComponent } from './jefe/controlStaff/agregar/agregar.component';
import { EditarComponent } from './jefe/controlStaff/editar/editar.component';
import { EliminarComponent } from './jefe/controlStaff/eliminar/eliminar.component';
import { BuscarTodosComponent } from './jefe/controlStaff/buscar/buscar-todos/buscar-todos.component';
import { BuscarUnoComponent } from './jefe/controlStaff/buscar/buscar-uno/buscar-uno.component';


@NgModule({
  declarations: [
    JefeComponent,
    CocineroComponent,
    MeseroComponent,
    MainComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    BuscarTodosComponent,
    BuscarUnoComponent,
  ],
  imports: [
    CommonModule,
    PrimeModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
