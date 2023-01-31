import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';

import { StaffService } from '../../services/staff/staff.service';
import { ValidatorsService } from '../../../../../shared/services/validators/validators.service';

import { staffListado } from './../../../../../interfaces/staff/staff.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent {


  listado!: staffListado;
  personalListado: any;

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
    password1: [''],
    password2: [''],
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

  validarRut = (): boolean => {
    const rut = this.editarStaff.get('rut')?.value;
    const valid = this.vs.validarRut(rut);

    if (valid) {
      this.activarFormulario();
      return true;

    } else {
      this.deshabilitarFormulario();
      return false;
    }

  };

  formatoRut = (): string => {
    let rut: string = this.editarStaff.get('rut')?.value;
    return rut = this.vs.formatoRut(rut);
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

  cargarDatosFormulario(datosStaff: []) {
    datosStaff.forEach((data: any) => {
      this.editarStaff.controls['nombre'].setValue(data.nombre);
      this.editarStaff.controls['segundoNombre'].setValue(data.segundoNombre);
      this.editarStaff.controls['apellido'].setValue(data.apellido);
      this.editarStaff.controls['segundoApellido'].setValue(data.segundoApellido);
      this.editarStaff.controls['estadoCivil'].setValue(data.estadoCivil);
      this.editarStaff.controls['direccion'].setValue(data.direccion);
      let fechaNueva: Date = data.fechaNacimiento;
      this.editarStaff.controls['fechaNacimiento'].setValue(fechaNueva.toString());
      this.editarStaff.controls['telefono'].setValue(data.telefono);
      this.editarStaff.controls['correoPersonal'].setValue(data.correoPersonal);
      this.editarStaff.controls['correoEmpresa'].setValue(data.correoEmpresa);
      this.editarStaff.controls['password1'].setValue(data.password1);
      this.editarStaff.controls['password2'].setValue(data.password2);
      this.editarStaff.controls['tipoRol'].setValue(data.rol);
      this.editarStaff.controls['nombreBanco'].setValue(data.nombreBanco);
      this.editarStaff.controls['tipoCuenta'].setValue(data.tipoCuenta);
      this.editarStaff.controls['numeroCuenta'].setValue(data.numeroCuenta);
      this.editarStaff.controls['tipoPrevision'].setValue(data.tipoPrevision);
      this.editarStaff.controls['nombreIsapre'].setValue(data.nombreIsapre);
      this.editarStaff.controls['sueldoBruto'].setValue(data.sueldoBruto);
      this.editarStaff.controls['sueldoLiquido'].setValue(data.sueldoLiquido);

    })
  };

  /* Metodos que interactuan con BD */
  editarEmpleado = () => {

    const fechaFormulario: Date = this.editarStaff.get('fechaNacimiento')?.value;

    let fechaNueva: string = this.vs.formatoFecha(fechaFormulario);

    const pass1 = this.editarStaff.get('password1')?.value;
    const pass2 = this.editarStaff.get('password2')?.value;

    if (this.validarRut()) {

      if (fechaNueva.length > 0) {

        if (this.vs.validarPassword(pass1, pass2)) {

          const rut = this.formatoRut();

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
              tipoRol,
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
            tipoRol,
            nombreIsapre
          ).subscribe(value => {
            if (value === true) {
              Swal.fire(
                {
                  icon: 'success',
                  title: 'Bien hecho',
                  text: 'Miembro actualizado correctamente',
                }
              );
              this.editarStaff.reset();
              this.deshabilitarFormulario();
            } else {
              Swal.fire('Error', value, 'error');
            }
          });

        } else {
          Swal.fire('Error', 'Las contraseñas ingresadas no son iguales', 'error');
        }
      } else {
        Swal.fire('Error', 'El empleado es menor de edad', 'error');
      }
    }

  }


  buscarUno = () => {
    const valid = this.validarRut();
    const rut = this.formatoRut();

    if (valid) {

      this.staffService.buscarStaff(rut).subscribe((staff) => {
        if (staff.ok) {
          this.listado = staff;
          this.personalListado = this.listado.staff;
          let datosStaff: any = this.personalListado;
          this.cargarDatosFormulario(datosStaff);
          Swal.fire({
            icon: 'success',
            title: 'Bien',
            text: 'Trabajador encontrado!',
          });
        } else {
          Swal.fire('Trabajador no encontrado', rut, 'error');
        }
      });

    } else {
      console.log('Adios');
    }
  };

}

