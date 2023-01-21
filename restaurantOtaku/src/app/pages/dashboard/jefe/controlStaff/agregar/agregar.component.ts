import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../../services/staff/staff.service';

interface EstadoCivil {
  estado: string,
  key: number
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  estado: EstadoCivil[] = [];
  // selectedCity1: City;

  ingresoStaff: FormGroup = this.fb.group({
    rut: ['1111111-1', [Validators.required]],
    nombre: ['', [Validators.required]],
    segundoNombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    segundoApellido: ['', [Validators.required]],
    estadoCivil: ['Seleccione una opcion', [Validators.required]]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.estado = [
      { estado: 'Soltero', key: 1 },
      { estado: 'Casado', key: 2 },
      { estado: 'Viudo', key: 3 },
      { estado: 'Divorciado', key: 4 },
    ]
  }

}
