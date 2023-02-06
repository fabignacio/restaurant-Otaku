import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from './../../../../../shared/services/validators/validators.service';
import { ProveedoresService } from './../../services/proveedores/proveedores.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styles: [
  ]
})
export class AgregarProveedorComponent {

  ingresoProveedor: FormGroup = this.fb.group({
    rutProveedor: ['', [Validators.required]],
    nombreProveedor: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    direccionComercial: ['', [Validators.required]],
    tipoProducto: ['', Validators.required],
    telefono: ['', [Validators.required]],
    emailContacto: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]]
  });

  constructor(
    private fb: FormBuilder,
    private proveedorService: ProveedoresService,
    private vs: ValidatorsService
  ) { };

  ngOnInigt() {
    this.deshabilitarFormulario();
  }

  validarRut = (): boolean => {

    let rut = this.ingresoProveedor.get('rutProveedor')?.value;
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

  //Metodos para control de formulario

  activarFormulario = () => {
    this.ingresoProveedor.get('nombreProveedor')?.enable();
    this.ingresoProveedor.get('direccion')?.enable();
    this.ingresoProveedor.get('direccionComercial')?.enable();
    this.ingresoProveedor.get('tipoProducto')?.enable();
    this.ingresoProveedor.get('telefono')?.enable();
    this.ingresoProveedor.get('emailContacto')?.enable();
  };

  deshabilitarFormulario = () => {
    this.ingresoProveedor.get('nombreProveedor')?.disable();
    this.ingresoProveedor.get('direccion')?.disable();
    this.ingresoProveedor.get('direccionComercial')?.disable();
    this.ingresoProveedor.get('tipoProducto')?.disable();
    this.ingresoProveedor.get('telefono')?.disable();
    this.ingresoProveedor.get('emailContacto')?.disable();
  };

  limpiarTodo = () => {
    this.ingresoProveedor.reset();
    this.deshabilitarFormulario();
  }

  //Metodos para formateo de datos

  formatearRut = (): string => {
    let rutProveedor: string = this.ingresoProveedor.get('rutProveedor')?.value;
    return rutProveedor = this.vs.formatoRut(rutProveedor);
  };

  //Metodo para guardar en BD

  guardarProveedor = () => {

    if (this.validarRut()) {

      const {
        rutProveedor,
        nombreProveedor,
        direccion,
        direccionComercial,
        tipoProducto,
        telefono,
        emailContacto
      } = this.ingresoProveedor.value;

      this.proveedorService.ingresoProveedores(rutProveedor,
        nombreProveedor,
        direccion,
        direccionComercial,
        tipoProducto,
        telefono,
        emailContacto
      ).subscribe(value => {
        if (value === true) {

          Swal.fire(
            {
              icon: 'success',
              title: 'Bien hecho',
              text: 'Nuevo proveedor agregado con exito',
            }
          );
          this.limpiarTodo();
        } else {
          Swal.fire('Error', value, 'error');
        }
      })

    }

  }

}
