import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

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
    this.router.navigateByUrl('/bienvenido/ingreso');
  }

  registro = () => {

  }

}
