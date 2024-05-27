import clienteAxios from './Axios';

export const loginUser = async (user: any): Promise<boolean> => {
  try {
    const response = await clienteAxios.post("/login", user)
    const token = response.data.accessToken;
    localStorage.setItem("accessToken", token);
    return true;
  } catch (error) {
    return false;
  }
}


export const getInformacionUsuario = async (): Promise<{email: string, role: string}> => {
  const response = await clienteAxios.get("/usuarios/info");
  return response.data;
}