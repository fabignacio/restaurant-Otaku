import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RadioButtonModule,
    PasswordModule,
    SidebarModule,
    SplitterModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RadioButtonModule,
    PasswordModule,
    SidebarModule,
    SplitterModule
  ]
})
export class PrimeModule { }
