import clienteAxios from './Axios';
import { jwtDecode } from "jwt-decode";

let usuarioID: number | undefined;

if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accessToken');

    if (token) {
        const decodedToken: { userID: number } = jwtDecode(token);
        if (decodedToken.userID) {
            usuarioID = decodedToken.userID;
        }
    }
}


export const editUserProfile = async (body: { nombre: string, edad: number, pais: string }) => {
    try {
        if (usuarioID !== undefined) {
            await clienteAxios.put(`/usuarios/profile/${usuarioID}`, body);
        } else {
            throw new Error('Usuario ID no encontrado en el token.');
        }
    } catch (e) {
        console.error('No se pudo modificar sus preferencias.', e);
        throw e;
    }
}

export const editUserSubscription = async (body: { tipoDeSuscripcion: number }) => {
    try {
        if (usuarioID !== undefined) {
            await clienteAxios.put(`/usuarios/subscription/${usuarioID}`, body);
        } else {
            throw new Error('Usuario ID no encontrado en el token.');
        }
    } catch (e) {
        console.error('No se pudo modificar su suscripción.', e);
        throw e;
    }
}

export const editUserNotifications = async (body: { recibirCorreos: number }) => {
    try {
        if (usuarioID !== undefined) {
            const response =  await clienteAxios.put(`/usuarios/notifications/${usuarioID}`, body);
            return response.data;
        } else {
            throw new Error('Usuario ID no encontrado en el token');
        }
    } catch (e) {
        console.error('No se pudo modificar sus notificaciones.', e);
        throw e;
    }
}

export const getUserById = async () => {
    try {
        if (usuarioID !== undefined) {
            const response = await clienteAxios.get(`/usuarios/info/${usuarioID}`);
            return response;
        } else {
            throw new Error('Usuario ID no encontrado en el token.');
        }
    } catch (e) {
        console.error('Error en el backend', e);
        throw e;
    }
}