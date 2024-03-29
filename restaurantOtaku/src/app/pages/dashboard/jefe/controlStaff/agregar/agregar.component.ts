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
  };

  validarRut = (): boolean => {
    let rut = this.ingresoStaff.get('rut')?.value;

    const valid = this.vs.validarRut(rut);

    if (valid) {
      this.activarFormulario();
      Swal.fire({
        icon: 'success',
        title: 'Bien',
        text: 'Rut valido',
      });
      return valid;
    } else {
      this.deshabilitarFormulario();
      Swal.fire('Rut no valido', rut, 'error');
      return valid;
    }

  };

  desactivarIsapre = () => {
    this.ingresoStaff.get('nombreIsapre')?.disable();
  };

  activarIsapre = () => {
    this.ingresoStaff.get('nombreIsapre')?.enable();
  };

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
  };

  formatearRut = (): string => {
    let rut: string = this.ingresoStaff.get('rut')?.value;
    return rut = this.vs.formatoRut(rut);
  };

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
  };

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
  };

  guardarEmpleado = () => {
    const fechaFormulario: Date = this.ingresoStaff.get('fechaNacimiento')?.value;

    let fechaNueva: string = this.vs.formatoFecha(fechaFormulario);

    const pass1 = this.ingresoStaff.get('password1')?.value;
    const pass2 = this.ingresoStaff.get('password2')?.value;

    if (this.validarRut()) {

      if (fechaNueva.length > 0) {
        if (this.vs.validarPassword(pass1, pass2)) {


          let nuevoRol: number = this.asignarRol();

          let rut: string = this.formatearRut();

          const
            {
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
          Swal.fire('Error', 'Las contraseñas ingresadas no son iguales', 'error');
        };
      } else {
        Swal.fire('Error', 'El empleado es menor de edad', 'error');
      }
    };
  };

  limpiarTodo = () => {
    this.ingresoStaff.reset();
    this.deshabilitarFormulario();
  }

}