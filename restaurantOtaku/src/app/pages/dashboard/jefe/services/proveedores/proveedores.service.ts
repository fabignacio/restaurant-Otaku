import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { enviroment } from './../../../../../../enviroments/enviroment';

@Injectable()
export class ProveedoresService {

    private _baseUrl: string = enviroment.baseUrlProveedores;

    constructor(private http: HttpClient) { }

}