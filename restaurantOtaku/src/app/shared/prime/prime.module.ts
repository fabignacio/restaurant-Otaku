import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
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
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
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
    RippleModule,
    TableModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
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
    RippleModule,
    TableModule,
    ToastModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PrimeModule { }
