import clienteAxios from './Axios';

export async function agregarPelicula(body: FormData): Promise<boolean> {
    try {
        await clienteAxios.post("/pelicula/upload", body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}