import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocineroComponent } from './cocinero/cocinero.component';
import { JefeComponent } from './jefe/jefe.component';
import { MeseroComponent } from './mesero/mesero.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'administrador', component: JefeComponent },
      { path: 'cocinero', component: CocineroComponent },
      { path: 'mesero', component: MeseroComponent },
      { path: '', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
