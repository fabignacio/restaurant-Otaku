import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, tap, Observable } from 'rxjs';

import { enviroment } from './../../../../../../enviroments/enviroment';
import { staffRespose } from '../../../../../interfaces/staff/staff.interface';

@Injectable()
export class StaffService {

  private _baseUrl: string = enviroment.baseUrlStaff;
  private _staff!: staffRespose;

  getStaff() {
    return { ...this._staff };
  }

  constructor(private http: HttpClient) { }

  ingresoStaff = (
    rut: string,
    nombre: string,
    segundoNombre: string,
    apellido: string,
    segundoApellido: string,
    estadoCivil: string,
    direccion: string,
    fechaNacimiento: string,
    telefono: string,
    correoPersonal: string,
    correoEmpresa: string,
    password1: string,
    password2: string,
    nombreBanco: string,
    tipoCuenta: string,
    numeroCuenta: number,
    tipoPrevision: string,
    sueldoBruto: number,
    sueldoLiquido: number,
    rol: number,
    nombreIsapre?: string,
  ) => {
    const url = `${this._baseUrl}/registro`;

    const body = {
      rut,
      nombre,
      segundoNombre,
      apellido,
      segundoApellido,
      estadoCivil,
      direccion,
      fechaNacimiento,
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
      rol,
      nombreIsapre
    };

    return this.http.post<staffRespose>(url, body)
      .pipe(
        map(valid => valid.ok),
        catchError(err => of(err.error.msg))
      )
  }
}
