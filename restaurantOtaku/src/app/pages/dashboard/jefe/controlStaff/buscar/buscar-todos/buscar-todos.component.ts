import { Component } from '@angular/core';
import { StaffService } from '../../../services/staff/staff.service';
import { staffListado } from '../../../../../../interfaces/staff/staff.interface';

@Component({
  selector: 'app-buscar-todos',
  templateUrl: './buscar-todos.component.html',
  styles: [
  ]
})
export class BuscarTodosComponent {

  listado!: staffListado;
  personalListado: any;

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.staffService.listadoStaff()
      .subscribe((staff) => {
        this.listado = staff;
        this.personalListado = this.listado.staff;
      });
  }
}
