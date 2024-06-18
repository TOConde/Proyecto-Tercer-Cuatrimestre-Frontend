import clienteAxios from './Axios';

export const getAllMovies = async (): Promise<any> => {
  const response = await clienteAxios.get("/peliculas/recomendadas");
  return response.data;
}