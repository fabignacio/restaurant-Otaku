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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Restaurant Otaku',
      },
      {
        label: 'Inicio',
        icon: 'pi pi-home'
      },
      {
        label: 'Reserva',
        icon: 'pi pi-calendar-times'
      },
      {
        label: 'Menu',
        icon: 'pi pi-tablet'
      },
      {
        label: 'Sobre nosotros',
        icon: 'pi pi-info-circle',
        items: [
          {
            label: 'Contactanos',
            icon: 'pi pi-question-circle',
          },
        ]
      },
    ];
  }

  ingreso = () => {
    this.router.navigateByUrl('/bienvenido/ingreso');
  }
}

