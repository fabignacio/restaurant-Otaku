import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of, tap, Observable } from 'rxjs';

import { enviroment } from './../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = enviroment.baseUrl;


  constructor(private http: HttpClient) { }

  // validarToken = (): Observable<boolean> => {
  //   const url = `${this._baseUrl}auth/renew`;
  //   const headers = new HttpHeaders()
  //     .set('x-token', localStorage.getItem('token') || '');

  //   return this.http.get<>(url, { headers })
  //     .pipe(
  //       map(resp => {
  //         this.mantenerUsuario(resp);
  //         return resp.ok;
  //       }),
  //       catchError(err => of(false))
  //     )
  // }

  // mantenerUsuario = (resp) => {
  //   localStorage.setItem('token', resp.token!);
  //   this._user = {
  //     nombre: resp.nombre!,
  //     email: resp.email!,
  //     uid: resp.uid!
  //   }
  // }

  logout = () => {
    localStorage.removeItem('token');
  }
}
