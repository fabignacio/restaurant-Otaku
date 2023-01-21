import { NgModule } from '@angular/core';


import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';



@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    PasswordModule,
    SidebarModule,
    SplitterModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    PasswordModule,
    SidebarModule,
    SplitterModule
  ]
})
export class PrimeModule { }
