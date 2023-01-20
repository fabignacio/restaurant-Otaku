import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ValidatorsService } from '../services/validators.service';

import Swal from 'sweetalert2'


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
  })

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
        this.router.navigateByUrl('/administracion/administrador');
        break;

      case 2:
        this.router.navigateByUrl('administracion/cocinero');
        break;
      case 3:
        this.router.navigateByUrl('administracion/mesero');
        break;

      default:
        break;
    }
  }
}
