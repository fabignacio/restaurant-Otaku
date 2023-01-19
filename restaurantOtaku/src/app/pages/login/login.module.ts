import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PrimeModule } from '../../prime/prime.module';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    PrimeModule
  ]
})
export class LoginModule { }
