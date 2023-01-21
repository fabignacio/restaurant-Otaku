import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JefeComponent } from './jefe/dashboard-jefe/jefe.component';

//Control Staff
import { AgregarComponent } from './jefe/controlStaff/agregar/agregar.component';
import { BuscarTodosComponent } from './jefe/controlStaff/buscar/buscar-todos/buscar-todos.component';
import { BuscarUnoComponent } from './jefe/controlStaff/buscar/buscar-uno/buscar-uno.component';
import { EditarComponent } from './jefe/controlStaff/editar/editar.component';
import { EliminarComponent } from './jefe/controlStaff/eliminar/eliminar.component';

import { CocineroComponent } from './cocinero/cocinero.component';
import { MeseroComponent } from './mesero/mesero.component';
import { AgregarProveedorComponent } from './jefe/controlProveedores/agregar-proveedor/agregar-proveedor.component';
import { BuscarTodosPComponent } from './jefe/controlProveedores/buscar/buscar-todos-p/buscar-todos-p.component';
import { BuscarUnoPComponent } from './jefe/controlProveedores/buscar/buscar-uno-p/buscar-uno-p.component';
import { EditarProveedorComponent } from './jefe/controlProveedores/editar-proveedor/editar-proveedor.component';
import { EliminarProveedorComponent } from './jefe/controlProveedores/eliminar-proveedor/eliminar-proveedor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'administrador',
        component: JefeComponent,
        children: [
          {
            path: 'control-staff',
            children: [
              { path: 'agregar', component: AgregarComponent },
              { path: 'buscar-todos', component: BuscarTodosComponent },
              { path: 'buscar-uno', component: BuscarUnoComponent },
              { path: 'editar', component: EditarComponent },
              { path: 'eliminar', component: EliminarComponent },
              { path: '**', redirectTo: 'administrador' }
            ]
          },
          {
            path: 'control-proveedores',
            children: [
              { path: 'agregar', component: AgregarProveedorComponent },
              { path: 'buscar-todos', component: BuscarTodosPComponent },
              { path: 'buscar-uno', component: BuscarUnoPComponent },
              { path: 'editar', component: EditarProveedorComponent },
              { path: 'eliminar', component: EliminarProveedorComponent },
              { path: '**', redirectTo: 'administrador' },
            ]
          }
        ]
      },
      { path: 'cocinero', component: CocineroComponent },
      { path: 'mesero', component: MeseroComponent },
      { path: '**', redirectTo: 'administrador' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
