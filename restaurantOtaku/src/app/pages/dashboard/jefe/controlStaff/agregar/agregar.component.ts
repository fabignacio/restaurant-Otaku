import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service';
import { StaffService } from '../../services/staff/staff.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  ingresoStaff: FormGroup = this.fb.group({
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

  validarRut = () => {
    const rut = this.ingresoStaff.get('rut')?.value;

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

  }

  validarPassword = (): boolean => {
    const pass1 = this.ingresoStaff.get('password1')?.value;
    const pass2 = this.ingresoStaff.get('password2')?.value;

    if (pass1 === pass2) {
      return true;
    } else {
      return false;
    }
  }

  desactivarIsapre = () => {
    this.ingresoStaff.get('nombreIsapre')?.disable();
  }

  activarIsapre = () => {
    this.ingresoStaff.get('nombreIsapre')?.enable();
  }

  formatoFecha = (): string => {
    let fechaNueva: string = '';

    const fecha: Date = this.ingresoStaff.get('fechaNacimiento')?.value;

    const dia: string = fecha.getDate().toString();
    const mes: string = this.nuevoMes(fecha.getMonth());
    const year: string = fecha.getFullYear().toString();

    return fechaNueva = dia + ' de ' + mes + ' del ' + year;
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
  }

  asignarRol = (): number => {
    let nuevoRol: number = 0;
    const rol: string = this.ingresoStaff.get('tipoRol')?.value;

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
  }

  deshabilitarFormulario = () => {
    this.ingresoStaff.get('nombre')?.disable();
    this.ingresoStaff.get('segundoNombre')?.disable();
    this.ingresoStaff.get('apellido')?.disable();
    this.ingresoStaff.get('segundoApellido')?.disable();
    this.ingresoStaff.get('estadoCivil')?.disable();
    this.ingresoStaff.get('direccion')?.disable();
    this.ingresoStaff.get('fechaNacimiento')?.disable();
    this.ingresoStaff.get('telefono')?.disable();
    this.ingresoStaff.get('correoPersonal')?.disable();
    this.ingresoStaff.get('correoEmpresa')?.disable();
    this.ingresoStaff.get('password1')?.disable();
    this.ingresoStaff.get('password2')?.disable();
    this.ingresoStaff.get('tipoRol')?.disable();
    this.ingresoStaff.get('nombreBanco')?.disable();
    this.ingresoStaff.get('tipoCuenta')?.disable();
    this.ingresoStaff.get('numeroCuenta')?.disable();
    this.ingresoStaff.get('tipoPrevision')?.disable();
    this.ingresoStaff.get('nombreIsapre')?.disable();
    this.ingresoStaff.get('sueldoBruto')?.disable();
    this.ingresoStaff.get('sueldoLiquido')?.disable();
  }

  activarFormulario = () => {
    this.ingresoStaff.get('nombre')?.enable();
    this.ingresoStaff.get('segundoNombre')?.enable();
    this.ingresoStaff.get('apellido')?.enable();
    this.ingresoStaff.get('segundoApellido')?.enable();
    this.ingresoStaff.get('estadoCivil')?.enable();
    this.ingresoStaff.get('direccion')?.enable();
    this.ingresoStaff.get('fechaNacimiento')?.enable();
    this.ingresoStaff.get('telefono')?.enable();
    this.ingresoStaff.get('correoPersonal')?.enable();
    this.ingresoStaff.get('correoEmpresa')?.enable();
    this.ingresoStaff.get('password1')?.enable();
    this.ingresoStaff.get('password2')?.enable();
    this.ingresoStaff.get('tipoRol')?.enable();
    this.ingresoStaff.get('nombreBanco')?.enable();
    this.ingresoStaff.get('tipoCuenta')?.enable();
    this.ingresoStaff.get('numeroCuenta')?.enable();
    this.ingresoStaff.get('tipoPrevision')?.enable();
    this.ingresoStaff.get('sueldoBruto')?.enable();
    this.ingresoStaff.get('sueldoLiquido')?.enable();
  }

  guardarEmpleado = () => {

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
        } = this.ingresoStaff.value;

      this.staffService.ingresoStaff(
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
          this.ingresoStaff.reset();
          this.deshabilitarFormulario();
        } else {
          Swal.fire('Error', value, 'error');
        }
      });

    } else {
      Swal.fire('Las contraseñas ingresadas no son iguales', 'error');
    }
  }

  limpiarTodo = () => {
    this.ingresoStaff.reset();
    this.deshabilitarFormulario();
  }

}