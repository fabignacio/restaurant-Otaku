import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  items: MenuItem[] = [];
  dinamicItems: MenuItem[] = [];

  constructor(
    private router: Router,
  ) {

  }

  ngAfterContentInit() {
    console.log('Hola desde ngAfterContentInit()');
    this.menuItems();
  }

  menuItems = (): MenuItem[] => {
    let index = this.estableceRol();
    switch (index) {
      case 1:
        this.dinamicItems = [
          {
            label: 'Administrador'
          }
        ];

        break;
      case 2:
        this.dinamicItems = [
          {
            label: 'Cocinero'
          }
        ];
        break;
      case 2:
        this.dinamicItems = [
          {
            label: 'Mesero'
          }
        ];
        break;
      default:
        break;
    }
    return this.dinamicItems;
  }

  estableceRol = (): number => {
    const rol = localStorage.getItem('rol');
    let index: number = 0;

    switch (rol) {
      case 'Administrador':
        index = 1
        break;
      case 'Cocinero':
        index = 2;
        break;
      case 'Mesero':
        index = 3;
        break;
      default:
        break;
    }

    return index;

  }

  ingreso = () => {
    this.router.navigateByUrl('/bienvenido/ingreso');
  }
}
