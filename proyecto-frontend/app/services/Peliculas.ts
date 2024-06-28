import clienteAxios from './Axios';

export const getAllMovies = async (): Promise<any> => {
  const response = await clienteAxios.get("/peliculas/all");
  return response.data;
}

export const deleteMovies = async (id: number): Promise<void> => {
  try {
    await clienteAxios.delete(`/peliculas/${id}`);
  } catch (error) {
    console.log('Error al eliminar la pelicula:', error);
  }
}

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

export const getAllGeneros = async (): Promise<any> => {
  const response = await clienteAxios.get('/pelicula/generos');
  return response.data;
}

export const editMovie = async (id: number, pelicula: any) => {
  try {
    await clienteAxios.put(`/peliculas/${id}`, pelicula);
  } catch (error) {
    console.log('Error editando la pelicula;', pelicula);
    throw error;
  }
}