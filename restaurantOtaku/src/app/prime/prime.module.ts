import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    PasswordModule,
    SidebarModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    PasswordModule,
    SidebarModule
  ]
})
export class PrimeModule { }
