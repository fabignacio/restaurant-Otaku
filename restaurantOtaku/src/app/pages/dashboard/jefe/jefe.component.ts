import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import Swal from 'sweetalert2';

import { AuthService } from '../../../services/login/auth.service';

@Component({
  selector: 'app-jefe',
  templateUrl: './jefe.component.html',
  styles: [
  ]
})
export class JefeComponent {

  items: MenuItem[] = [];

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Control del Staff',
        icon: 'pi pi-sitemap',
        items: [
          {
            label: 'Agregar nuevo personal',
            icon: 'pi pi-user-plus'
          },
          {
            label: 'Editar personal',
            icon: 'pi pi-user-edit',
          },
          {
            label: 'Remover personal',
            icon: 'pi pi-user-minus'
          },
          {
            label: 'Buscar personal',
            icon: 'pi pi-search',
            items: [
              { label: 'Listar todos', icon: 'pi pi-users' },
              { label: 'Buscar uno', icon: 'pi pi-user' },
            ]
          }
        ]
      },
      {
        label: 'Control de Proveedores',
        icon: 'pi pi-truck',
        items: [
          {
            label: 'Agregar nuevo proveedor',
            icon: 'pi pi-save'
          },
          {
            label: 'Editar proveedor',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Remover proveedor',
            icon: 'pi pi-trash'
          },
          {
            label: 'Buscar proveedores',
            icon: 'pi pi-search',
            items: [
              { label: 'Encontrar todos', icon: 'pi pi-search-plus' },
              { label: 'Buscar uno', icon: 'pi pi-search' },
            ]
          },
        ]
      }
    ]
  }

  logout = () => {
    this.auth.logout();
    this.router.navigateByUrl('/');
    Swal.fire({
      icon: 'success',
      title: 'Hasta luego...',
      text: 'Sesion cerrada',
    })
  }
}