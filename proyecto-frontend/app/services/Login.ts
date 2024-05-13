import clienteAxios from './Axios';

export const loginUser = async (usuario: any) => {
  try {
    const response = await Promise.resolve(clienteAxios.post("http://localhost:8080/auth/login", usuario));
    sessionStorage.setItem('token', response.data.accessToken);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}