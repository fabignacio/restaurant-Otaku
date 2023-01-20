import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './../pages/login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(): Observable<boolean> | boolean {
    return this.auth.validarToken()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigateByUrl('/administracion');
          }
        })
      )
  }

  canLoad(): Observable<boolean> | boolean {
    return this.auth.validarToken()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigateByUrl('/administracion');
          }
        })
      )
  }
}