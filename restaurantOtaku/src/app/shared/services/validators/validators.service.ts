import { Injectable } from '@angular/core';
import { validateRut, RutFormat, formatRut } from '@fdograph/rut-utilities';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public passwordPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";

  constructor() { }

  validarRut = (rut: string): boolean => {
    const valido = validateRut(rut);
    return valido;
  };

  formatoRut = (rut: string): string => {
    const rutFormateado: string = (formatRut(rut, RutFormat.DOTS_DASH));
    return rutFormateado;
  };

  validarEdad = (date: Date): boolean => {

    const hoy: number = new Date().getFullYear();

    const year: number = date.getFullYear();
    const edad: number = hoy - year;

    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  };

  validarPassword = (pass1: string, pass2: string): boolean => {

    if (pass1 === pass2) {
      return true;
    } else {
      return false;
    };

  };

  formatoFecha = (fecha: Date): string => {
    let fechaNueva: string = '';

    if (this.validarEdad(fecha)) {

      const dia: string = fecha.getDate().toString();
      const mes: string = this.nuevoMes(fecha.getMonth());
      const year: string = fecha.getFullYear().toString();

      fechaNueva = dia + '-' + mes + '-' + year;
      return fechaNueva;
    } else {
      return fechaNueva;
    };
  };

  nuevoMes = (fecha: number): string => {
    let mes = '';

    switch (fecha) {
      case 0:
        mes = '01';
        break;
      case 1:
        mes = '02';
        break;
      case 2:
        mes = '03';
        break;
      case 3:
        mes = '04';
        break;
      case 4:
        mes = '05';
        break;
      case 5:
        mes = '06';
        break;
      case 6:
        mes = '07';
        break;
      case 7:
        mes = '08';
        break;
      case 8:
        mes = '09';
        break;
      case 9:
        mes = '10';
        break;
      case 10:
        mes = '11';
        break;
      case 11:
        mes = '12';
        break;
      default:
        break;
    };

    return mes;
  };

}
