import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatorsService } from '../services/validators.service';


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
    private vs: ValidatorsService
  ) {

  }

  login = () => {

  }

  registro = () => {
    this.router.navigateByUrl('/bienvenido/registro');
  }
}
