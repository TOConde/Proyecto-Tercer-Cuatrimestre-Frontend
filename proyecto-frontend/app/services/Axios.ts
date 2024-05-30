import axios from 'axios';

const createClient = () => {
  const cliente = axios.create({
    baseURL: 'http://localhost:8080',
  });
  return cliente;
}

const clienteAxios = createClient();
clienteAxios.interceptors.request.use((request) => {
  if (localStorage.getItem("accessToken")) {
    request.headers.Authorization = `Bearer ${ localStorage.getItem("accessToken") }`;
  }
  return request;
})

export default clienteAxios;
