import { NgModule } from '@angular/core';
import { PrimeModule } from '../prime/prime.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    PrimeModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
