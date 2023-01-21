import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimeModule } from '../../prime/prime.module';


import { JefeComponent } from './jefe/dashboard-jefe/jefe.component';
import { CocineroComponent } from './cocinero/cocinero.component';
import { MeseroComponent } from './mesero/mesero.component';
import { MainComponent } from './main/main.component';

//Componentes para control de Staff
import { AgregarComponent } from './jefe/controlStaff/agregar/agregar.component';
import { EditarComponent } from './jefe/controlStaff/editar/editar.component';
import { EliminarComponent } from './jefe/controlStaff/eliminar/eliminar.component';
import { BuscarTodosComponent } from './jefe/controlStaff/buscar/buscar-todos/buscar-todos.component';
import { BuscarUnoComponent } from './jefe/controlStaff/buscar/buscar-uno/buscar-uno.component';
import { AgregarProveedorComponent } from './jefe/controlProveedores/agregar-proveedor/agregar-proveedor.component';
import { EliminarProveedorComponent } from './jefe/controlProveedores/eliminar-proveedor/eliminar-proveedor.component';
import { EditarProveedorComponent } from './jefe/controlProveedores/editar-proveedor/editar-proveedor.component';
import { BuscarTodosPComponent } from './jefe/controlProveedores/buscar/buscar-todos-p/buscar-todos-p.component';
import { BuscarUnoPComponent } from './jefe/controlProveedores/buscar/buscar-uno-p/buscar-uno-p.component';


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
    AgregarProveedorComponent,
    EliminarProveedorComponent,
    EditarProveedorComponent,
    BuscarTodosPComponent,
    BuscarUnoPComponent,
  ],
  imports: [
    CommonModule,
    PrimeModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
