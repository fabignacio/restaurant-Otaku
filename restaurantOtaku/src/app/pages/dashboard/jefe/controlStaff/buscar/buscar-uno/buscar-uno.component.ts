import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';

import { staffListado } from '../../../../../../interfaces/staff/staff.interface';
import { ValidatorsService } from '../../../../../../shared/services/validators/validators.service';

import { StaffService } from '../../../services/staff/staff.service';

@Component({
  selector: 'app-buscar-uno',
  templateUrl: './buscar-uno.component.html',
  styles: [
  ]
})
export class BuscarUnoComponent {

  listado!: staffListado;
  personalListado: any;

  buscarStaff: FormGroup = this.fb.group({
    rut: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private vs: ValidatorsService
  ) { }

  validarRut = (): boolean => {
    const rut = this.buscarStaff.get('rut')?.value;
    const valid = this.vs.validarRut(rut);

    if (valid) {

      return true;

    } else {
      return false;
    }

  }

  buscarUno = () => {
    const valid = this.validarRut();
    const rut = this.buscarStaff.get('rut')?.value;

    if (valid) {

      this.staffService.buscarStaff(rut).subscribe((staff) => {
        if (staff.ok) {
          this.listado = staff;
          this.personalListado = this.listado.staff;
          Swal.fire({
            icon: 'success',
            title: 'Bien',
            text: 'Trabajador encontrado!',
          });
        } else {
          Swal.fire('Trabajador no encontrado', rut, 'error');
        }
      })

    } else {
      console.log('Adios');
    }
  }


}
