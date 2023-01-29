import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';

import { StaffService } from '../../services/staff/staff.service';
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent {

  editarStaff: FormGroup = this.fb.group({
    rut: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    segundoNombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    segundoApellido: ['', [Validators.required]],
    estadoCivil: ['', Validators.required],
    direccion: ['', [Validators.required]],
    fechaNacimiento: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correoPersonal: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    correoEmpresa: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    password1: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', [Validators.required, Validators.minLength(8)]],
    tipoRol: ['', [Validators.required]],
    nombreBanco: ['', [Validators.required]],
    tipoCuenta: ['', [Validators.required]],
    numeroCuenta: ['', [Validators.required]],
    tipoPrevision: ['', [Validators.required]],
    nombreIsapre: [''],
    sueldoBruto: ['', Validators.required],
    sueldoLiquido: ['', Validators.required]
  });

  valid: boolean = false;
  nuevaFecha: string = '';

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private vs: ValidatorsService
  ) { }

  ngOnInit() {
    this.deshabilitarFormulario();
  }

  /* Validaciones y dar formatos a los datos */

  validarRut = () => {
    const rut = this.editarStaff.get('rut')?.value;

    const valid = this.vs.validarRut(rut);

    if (valid) {
      this.activarFormulario();
      Swal.fire({
        icon: 'success',
        title: 'Bien',
        text: 'Rut valido',
      });

    } else {
      this.deshabilitarFormulario();
      Swal.fire('Rut no valido', rut, 'error');
    }

  };

  validarPassword = (): boolean => {
    const pass1 = this.editarStaff.get('password1')?.value;
    const pass2 = this.editarStaff.get('password2')?.value;

    if (pass1 === pass2) {
      return true;
    } else {
      return false;
    }
  };

  formatoFecha = (): string => {
    let fechaNueva: string = '';

    const fecha: Date = this.editarStaff.get('fechaNacimiento')?.value;

    const dia: string = fecha.getDate().toString();
    const mes: string = this.nuevoMes(fecha.getMonth());
    const year: string = fecha.getFullYear().toString();

    fechaNueva = dia + ' de ' + mes + ' del ' + year;
    return fechaNueva;
  }

  nuevoMes = (fecha: number): string => {
    let mes = '';

    switch (fecha) {
      case 0:
        mes = 'Enero';
        break;
      case 1:
        mes = 'Febrero';
        break;
      case 2:
        mes = 'Marzo';
        break;
      case 3:
        mes = 'Abril';
        break;
      case 4:
        mes = 'Mayo';
        break;
      case 5:
        mes = 'Junio';
        break;
      case 6:
        mes = 'Julio';
        break;
      case 7:
        mes = 'Agosto';
        break;
      case 8:
        mes = 'Septiembre';
        break;
      case 9:
        mes = 'Octubre';
        break;
      case 10:
        mes = 'Noviembre';
        break;
      case 11:
        mes = 'Diciembre';
        break;
      default:
        break;
    }

    return mes;
  };

  asignarRol = (): number => {
    let nuevoRol: number = 0;
    const rol: string = this.editarStaff.get('tipoRol')?.value;

    switch (rol) {
      case 'Administrador':
        nuevoRol = 1;
        break;
      case 'Cocinero':
        nuevoRol = 2;
        break;
      case 'Mesero':
        nuevoRol = 3;
        break;
      default:
        break;
    }
    return nuevoRol;
  };

  /* Control de Formulario y sus campos */

  desactivarIsapre = () => {
    this.editarStaff.get('nombreIsapre')?.disable();
  };

  activarIsapre = () => {
    this.editarStaff.get('nombreIsapre')?.enable();
  };

  deshabilitarFormulario = () => {

    this.editarStaff.get('nombre')?.disable();
    this.editarStaff.get('segundoNombre')?.disable();
    this.editarStaff.get('apellido')?.disable();
    this.editarStaff.get('segundoApellido')?.disable();
    this.editarStaff.get('estadoCivil')?.disable();
    this.editarStaff.get('direccion')?.disable();
    this.editarStaff.get('fechaNacimiento')?.disable();
    this.editarStaff.get('telefono')?.disable();
    this.editarStaff.get('correoPersonal')?.disable();
    this.editarStaff.get('correoEmpresa')?.disable();
    this.editarStaff.get('password1')?.disable();
    this.editarStaff.get('password2')?.disable();
    this.editarStaff.get('tipoRol')?.disable();
    this.editarStaff.get('nombreBanco')?.disable();
    this.editarStaff.get('tipoCuenta')?.disable();
    this.editarStaff.get('numeroCuenta')?.disable();
    this.editarStaff.get('tipoPrevision')?.disable();
    this.editarStaff.get('nombreIsapre')?.disable();
    this.editarStaff.get('sueldoBruto')?.disable();
    this.editarStaff.get('sueldoLiquido')?.disable();

  };

  activarFormulario = () => {

    this.editarStaff.get('nombre')?.enable();
    this.editarStaff.get('segundoNombre')?.enable();
    this.editarStaff.get('apellido')?.enable();
    this.editarStaff.get('segundoApellido')?.enable();
    this.editarStaff.get('estadoCivil')?.enable();
    this.editarStaff.get('direccion')?.enable();
    this.editarStaff.get('fechaNacimiento')?.enable();
    this.editarStaff.get('telefono')?.enable();
    this.editarStaff.get('correoPersonal')?.enable();
    this.editarStaff.get('correoEmpresa')?.enable();
    this.editarStaff.get('password1')?.enable();
    this.editarStaff.get('password2')?.enable();
    this.editarStaff.get('tipoRol')?.enable();
    this.editarStaff.get('nombreBanco')?.enable();
    this.editarStaff.get('tipoCuenta')?.enable();
    this.editarStaff.get('numeroCuenta')?.enable();
    this.editarStaff.get('tipoPrevision')?.enable();
    this.editarStaff.get('sueldoBruto')?.enable();
    this.editarStaff.get('sueldoLiquido')?.enable();

  };

  limpiarTodo = () => {
    this.editarStaff.reset();
    this.deshabilitarFormulario();
  };

  /* Metodos del servicio */
  editarEmpleado = () => {

    if (this.validarPassword()) {
      let fechaNueva: string = this.formatoFecha();

      let nuevoRol: number = this.asignarRol();

      const
        {
          rut,
          nombre,
          segundoNombre,
          apellido,
          segundoApellido,
          estadoCivil,
          direccion,
          telefono,
          correoPersonal,
          correoEmpresa,
          password1,
          password2,
          nombreBanco,
          tipoCuenta,
          numeroCuenta,
          tipoPrevision,
          sueldoBruto,
          sueldoLiquido,
          nombreIsapre
        } = this.editarStaff.value;

      this.staffService.editarStaff(
        rut,
        nombre,
        segundoNombre,
        apellido,
        segundoApellido,
        estadoCivil,
        direccion,
        fechaNueva,
        telefono,
        correoPersonal,
        correoEmpresa,
        password1,
        password2,
        nombreBanco,
        tipoCuenta,
        numeroCuenta,
        tipoPrevision,
        sueldoBruto,
        sueldoLiquido,
        nuevoRol,
        nombreIsapre
      ).subscribe(value => {
        if (value === true) {
          Swal.fire(
            {
              icon: 'success',
              title: 'Bien hecho',
              text: 'Nuevo miembro del personal agregado con exito',
            }
          )
          this.editarStaff.reset();
          this.deshabilitarFormulario();
        } else {
          Swal.fire('Error', value, 'error');
        }
      });

    } else {
      Swal.fire('Las contraseñas ingresadas no son iguales', 'error');
    }
  }


}
