import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  loginFormulario: FormGroup = this.fb.group({
    email: ['example@example.com', [Validators.required]],
    password: ['password', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  login = () => {
    console.log('Hola Mundo');
  }

  registro = () => {
    this.router.navigateByUrl('/bienvenido/registro');
  }
}
