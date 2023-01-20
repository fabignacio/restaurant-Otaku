export interface AuthResponse {
    ok: boolean,
    uid?: string,
    rut?: string,
    nombre?: string,
    apellido?: string,
    email?: string,
    rol?: number,
    token?: string
}

export interface Usuario {
    uid: string,
    nombre: string,
    email: string,
    rol: number
}
