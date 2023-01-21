import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './services/guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'bienvenido',
    loadChildren: () => import('./pages/login/login.module').then(l => l.LoginModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(d => d.DashboardModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
