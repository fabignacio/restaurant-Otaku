export interface staffResponse {
    ok: boolean,
    uid?: string,
    rut?: string,
    nombre?: string,
    segundoNombre?: string,
    apellido?: string,
    segundoApellido?: string,
    estadoCivil?: string,
    direccion?: string,
    fechaNacimiento?: string,
    telefono?: string,
    correoPersonal?: string,
    correoEmpresa?: string,
    password1?: string,
    password2?: string,
    nombreBanco?: string,
    tipoCuenta?: string,
    numeroCuenta?: number,
    tipoPrevision?: string,
    nombreIsapre?: string,
    sueldoBruto?: number,
    sueldoLiquido?: number,
    rol?: number,
    token?: string,
}

export interface UsuarioLogin {
    uid: string,
    nombre: string,
    correoEmpresa: string,
    rol: number
}

export interface staffListado {
    ok: boolean,
    staff: [];
}