import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    PasswordModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    PasswordModule
  ]
})
export class PrimeModule { }
