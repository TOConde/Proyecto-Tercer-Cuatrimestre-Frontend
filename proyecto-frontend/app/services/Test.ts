import clienteAxios from "./Axios";

export const getTest = async () => {
  try {
    const response = await Promise.resolve(clienteAxios.get('/test'));
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}