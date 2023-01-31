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
  }
}
