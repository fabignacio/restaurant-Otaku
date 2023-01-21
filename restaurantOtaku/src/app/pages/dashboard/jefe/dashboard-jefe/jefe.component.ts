import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import Swal from 'sweetalert2';
import { AuthService } from '../../../../services/login/auth.service';

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
            icon: 'pi pi-user-plus',
            command: () => { this.router.navigateByUrl('administracion/administrador/control-staff/agregar') }
          },
          {
            label: 'Editar personal',
            icon: 'pi pi-user-edit',
            command: () => { this.router.navigateByUrl('administracion/administrador/control-staff/editar') }
          },
          {
            label: 'Remover personal',
            icon: 'pi pi-user-minus',
            command: () => { this.router.navigateByUrl('administracion/administrador/control-staff/eliminar') }
          },
          {
            label: 'Buscar personal',
            icon: 'pi pi-search',
            items: [
              {
                label: 'Listar todos',
                icon: 'pi pi-users',
                command: () => { this.router.navigateByUrl('administracion/administrador/control-staff/buscar-todos') }
              },
              {
                label: 'Buscar uno',
                icon: 'pi pi-user',
                command: () => { this.router.navigateByUrl('administracion/administrador/control-staff/buscar-uno') }
              },
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
            icon: 'pi pi-save',
            command: () => { this.router.navigateByUrl('administracion/administrador/control-proveedores/agregar') }
          },
          {
            label: 'Editar proveedor',
            icon: 'pi pi-pencil',
            command: () => { this.router.navigateByUrl('administracion/administrador/control-proveedores/editar') }
          },
          {
            label: 'Remover proveedor',
            icon: 'pi pi-trash',
            command: () => { this.router.navigateByUrl('administracion/administrador/control-proveedores/eliminar') }
          },
          {
            label: 'Buscar proveedores',
            icon: 'pi pi-search',
            items: [
              {
                label: 'Encontrar todos',
                icon: 'pi pi-search-plus',
                command: () => { this.router.navigateByUrl('administracion/administrador/control-proveedores/buscar-todos') }
              },

              {
                label: 'Buscar uno',
                icon: 'pi pi-search',
                command: () => { this.router.navigateByUrl('administracion/administrador/control-proveedores/buscar-uno') }
              },

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