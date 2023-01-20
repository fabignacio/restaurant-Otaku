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
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Restaurant Otaku'
      },
      {
        label: 'Menu',
        icon: 'pi pi-tablet'
      },
      {
        label: 'Reserva',
        icon: ' pi pi-calendar-plus'
      },
      {
        label: 'Sobre nosotros',
        icon: 'pi pi-info-circle',
        items:
          [
            {
              label: 'Contactanos',
              icon: 'pi pi-phone'
            },
            {
              label: 'Historia',
              icon: 'pi pi-history'
            },
            {
              label: 'Preguntas frecuentes',
              icon: 'pi pi-question-circle'
            }
          ]
      }
    ]
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
