import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

import Swal from 'sweetalert2';

import { ValidatorsService } from '../../../../../shared/services/validators/validators.service';
import { StaffService } from '../../services/staff/staff.service';

import { staffListado } from '../../../../../interfaces/staff/staff.interface';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styles: [
  ]
})
export class EliminarComponent {

  listado!: staffListado;
  personalListado: any;

  eliminarStaff: FormGroup = this.fb.group({
    rut: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private staffService: StaffService,
    private vs: ValidatorsService
  ) { }

  validarRut = (): boolean => {
    const rut = this.eliminarStaff.get('rut')?.value;
    const valid = this.vs.validarRut(rut);

    if (valid) {

      return true;

    } else {
      return false;
    }

  }

  buscarUno = () => {
    const valid = this.validarRut();
    const rut = this.eliminarStaff.get('rut')?.value;

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

  eliminarRegistro = () => {

    this.confirmationService.confirm({
      header: '¿Está seguro?',
      message: 'Esta accion no se puede revertir',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const rut = this.eliminarStaff.get('rut')?.value;
        this.staffService.eliminarStaff(rut).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Exito!',
          detail: 'Trabajador borrado',
          life: 3000
        });
        this.eliminarStaff.reset();
        this.personalListado = [];
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Has rechazado la operación' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'Has cancelado la operación' });
            break;
        }
      }
    })
  }

}
