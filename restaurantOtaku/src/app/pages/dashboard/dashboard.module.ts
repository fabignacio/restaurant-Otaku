import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimeModule } from '../../shared/prime/prime.module';

import { JefeComponent } from './jefe/dashboard-jefe/jefe.component';
//Componentes para control de Staff
import { AgregarComponent } from './jefe/controlStaff/agregar/agregar.component';
import { EditarComponent } from './jefe/controlStaff/editar/editar.component';
import { EliminarComponent } from './jefe/controlStaff/eliminar/eliminar.component';
import { BuscarTodosComponent } from './jefe/controlStaff/buscar/buscar-todos/buscar-todos.component';
import { BuscarUnoComponent } from './jefe/controlStaff/buscar/buscar-uno/buscar-uno.component';

//Componentes para control de proveedores
import { AgregarProveedorComponent } from './jefe/controlProveedores/agregar-proveedor/agregar-proveedor.component';
import { EliminarProveedorComponent } from './jefe/controlProveedores/eliminar-proveedor/eliminar-proveedor.component';
import { EditarProveedorComponent } from './jefe/controlProveedores/editar-proveedor/editar-proveedor.component';
import { BuscarTodosPComponent } from './jefe/controlProveedores/buscar/buscar-todos-p/buscar-todos-p.component';
import { BuscarUnoPComponent } from './jefe/controlProveedores/buscar/buscar-uno-p/buscar-uno-p.component';

import { CocineroComponent } from './cocinero/cocinero.component';
import { MeseroComponent } from './mesero/mesero.component';
import { MainComponent } from './main/main.component';

//Servicios
import { StaffService } from './jefe/services/staff/staff.service';
import { ProveedoresService } from './jefe/services/proveedores/proveedores.service';


//Pipes
import { RolPipe } from '../../shared/pipes/rol.pipe';

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

    RolPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeModule,
    DashboardRoutingModule
  ],
  providers: [
    StaffService,
    ProveedoresService
  ]
})
export class DashboardModule { }
