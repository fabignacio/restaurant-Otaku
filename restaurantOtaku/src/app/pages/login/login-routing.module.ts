import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ingreso', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: '**', redirectTo: 'ingreso' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
