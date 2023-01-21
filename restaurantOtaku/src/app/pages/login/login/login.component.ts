import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../../shared/services/login/auth.service';
import { ValidatorsService } from './../../../shared/services/validators/validators.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
        :host ::ng-deep .p-password input {
            width: 15rem
        }
    `
  ]
})
export class LoginComponent {
  loginFormulario: FormGroup = this.fb.group({
    email: ['example@example.com', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    password: ['password', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private vs: ValidatorsService
  ) {

  }

  login = () => {
    const { email, password } = this.loginFormulario.value;

    this.auth.login(email, password)
      .subscribe(value => {
        if (value === true) {
          this.roles();
          Swal.fire({
            icon: 'success',
            title: 'Bien hecho',
            text: 'Login exitoso',
          });
        } else {
          Swal.fire('Error', value, 'error');
        }
      })
  }

  roles = () => {
    const rol = this.auth.user.rol;

    switch (rol) {
      case 1:
        this.auth.establecerRol(rol);
        this.router.navigateByUrl('/administracion/administrador');
        break;

      case 2:
        this.auth.establecerRol(rol);
        this.router.navigateByUrl('administracion/cocinero');
        break;

      case 3:
        this.auth.establecerRol(rol);
        this.router.navigateByUrl('administracion/mesero');
        break;

      default:
        break;
    }
    return rol;

  }
}
