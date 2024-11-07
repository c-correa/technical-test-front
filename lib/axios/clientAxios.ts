import axios, { AxiosInstance } from 'axios';
// const baseURL = 'https://technical-test-api-node.onrender.com'
// const baseURL = 'http://localhost:3000'
const baseURL = 'https://technical-test-api-node.onrender.com'

const clientAxios: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientAxios.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la respuesta de Axios:', error);
    return Promise.reject(error);
  }
);

export default clientAxios;
