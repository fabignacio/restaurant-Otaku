import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of, Observable } from 'rxjs';

import { enviroment } from './../../../../../../enviroments/enviroment';
import { ProveedoresResponse } from './../../../../../interfaces/proveedores/proveedores.interface';

@Injectable()
export class ProveedoresService {

    private _baseUrl: string = enviroment.baseUrlProveedores;

    constructor(private http: HttpClient) { }

    ingresoProveedores = (
        rutProveedor: string,
        nombre: string,
        direccion: string,
        direccionComercial: string,
        tipoProducto: string,
        telefonoContacto: string,
        emailContacto: string
    ): Observable<ProveedoresResponse> => {

        const url = `${this._baseUrl}/registro-proveedores`;
        const body = {
            rutProveedor,
            nombre,
            direccion,
            direccionComercial,
            tipoProducto,
            telefonoContacto,
            emailContacto,
        };

        return this.http.post<ProveedoresResponse>(url, body)
            .pipe(
                map(valid => valid.ok),
                catchError(err => of(err.error.msg))
            );
    };

    eliminarProveedores = (rut: string) => {
        const url = `${this._baseUrl}/eliminar-proveedor`;
        const body = { rut };

        return this.http.delete(url, { body });
    };

    buscarProveedores = (): Observable<ProveedoresResponse> => {
        const url = `${this._baseUrl}/buscar/`;

        return this.http.get<ProveedoresResponse>(url)
            .pipe(
                map(resp => {
                    return resp;
                })
            );
    };

    buscarProveedor = (rutProveedor: string): Observable<ProveedoresResponse> => {
        const url = `${this._baseUrl}/buscar/${rutProveedor}`;

        return this.http.get<ProveedoresResponse>(url);
    };

    editarProveedor = (
        rutProveedor: string,
        nombre: string,
        direccion: string,
        direccionComercial: string,
        tipoProducto: string,
        telefonoContacto: string,
        emailContacto: string
    ) => {
        const url = `${this._baseUrl}/editar-proveedor`;
        const body = {
            rutProveedor,
            nombre,
            direccion,
            direccionComercial,
            tipoProducto,
            telefonoContacto,
            emailContacto,
        };

        return this.http.post<ProveedoresResponse>(url, body)
            .pipe(
                map(valid => valid.ok),
                catchError(err => of(err.error.msg))
            );
    };
}