import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RadioButtonModule,
    PasswordModule,
    SplitterModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RadioButtonModule,
    PasswordModule,
    SplitterModule
  ]
})
export class PrimeModule { }
