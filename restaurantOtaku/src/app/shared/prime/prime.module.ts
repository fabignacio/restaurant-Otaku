import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RadioButtonModule,
    PasswordModule,
    SplitterModule,
    TableModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    RadioButtonModule,
    PasswordModule,
    SplitterModule,
    TableModule
  ]
})
export class PrimeModule { }
