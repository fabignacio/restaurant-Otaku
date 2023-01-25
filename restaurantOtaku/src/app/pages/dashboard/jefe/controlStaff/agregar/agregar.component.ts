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


  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService
  ) { }

  ngOnInit() {

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

  validarRut = () => {
    const rut = this.ingresoStaff.get('rut')?.value;

    const valid = this.vs.validarRut(rut);

    if (valid) {
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
      this.ingresoStaff.get('nombreIsapre')?.enable();
      this.ingresoStaff.get('sueldoBruto')?.enable();
      this.ingresoStaff.get('sueldoLiquido')?.enable();

      Swal.fire({
        icon: 'success',
        title: 'Bien',
        text: 'Rut valido',
      });

    } else {
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
      Swal.fire('Rut no valido', rut, 'error');
    }

  }

  guardarEmpleado = () => {

  }

}
