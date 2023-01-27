import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'asignarRol'
})
export class RolPipe implements PipeTransform {

    transform(value: number): string {

        let rol: string = '';

        switch (value) {
            case 1:
                return rol = 'Administrador';
            case 2:
                return rol = 'Cocinero';
            case 3:
                return rol = 'Mesero';
            default:
                break;
        }
        return rol;

    }

}