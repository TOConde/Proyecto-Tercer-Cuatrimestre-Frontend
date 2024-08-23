import clienteAxios from './Axios';

export async function registerUser(body: { email: string; password: string }): Promise<boolean> {
    try {
        await clienteAxios.post("/register", body);
        return true;
    } catch (e) {
        return false;
    }
}