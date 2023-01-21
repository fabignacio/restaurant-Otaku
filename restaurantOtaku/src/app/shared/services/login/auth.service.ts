import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of, tap, Observable } from 'rxjs';


import { enviroment } from './../../../../enviroments/enviroment';
import { AuthResponse, Usuario } from './../../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = enviroment.baseUrlStaff;
  private _user!: Usuario;

  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient) { }

  login = (email: string, password: string) => {

    const url = `${this._baseUrl}/ingreso`
    const body = { email, password }

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            this.mantenerUsuario(resp);
          }
        }),
        map(valid => valid.ok),
        catchError(err => of(err.error.msg))
      )
  }

  validarToken = (): Observable<boolean> => {
    const url = `${this._baseUrl}/token`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          this.mantenerUsuario(resp);
          return resp.ok;
        }),
        catchError(err => of(false))
      )
  }

  mantenerUsuario = (resp: AuthResponse) => {
    localStorage.setItem('token', resp.token!);
    this._user = {
      uid: resp.uid!,
      nombre: resp.nombre!,
      email: resp.email!,
      rol: resp.rol!
    }
  }

  establecerRol = (index: number) => {
    let currentRol: string = '';
    const rol = index;

    switch (rol) {
      case 1:
        currentRol = 'Administrador';
        localStorage.setItem('rol', currentRol);
        break;
      case 2:
        currentRol = 'Cocinero';
        localStorage.setItem('rol', currentRol);
        break;
      case 3:
        currentRol = 'Mesero';
        localStorage.setItem('rol', currentRol);
        break;
      default:
        break;
    }
  }

  logout = () => {
    localStorage.removeItem('token');
  }
}
