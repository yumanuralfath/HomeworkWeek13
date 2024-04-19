import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/'
})

instance.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, (error) => {
  throw error
})

export default instance;