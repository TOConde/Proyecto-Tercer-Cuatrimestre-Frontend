'use client'
import axios from 'axios';

const createCliente = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("accessToken");
    const cliente = axios.create({
      baseURL: 'http://localhost:8000/',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return cliente;
  }
  const cliente = axios.create({
    baseURL: 'http://localhost:8000/',
  });
  return cliente;
}
const clienteAxios = createCliente();

export default clienteAxios;
