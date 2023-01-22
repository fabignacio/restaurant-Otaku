import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service';
import { StaffService } from '../../services/staff/staff.service';

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
    nombreBanco: ['', [Validators.required]],
    tipoCuenta: ['', [Validators.required]],
    numeroCuenta: ['', [Validators.required]],
    tipoPrevision: ['', [Validators.required]],
    sueldoBruto: ['', Validators.required],
    sueldoLiquido: ['', Validators.required]
  });


  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService
  ) { }

  ngOnInit() { }

}
