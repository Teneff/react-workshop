import axios from 'axios';

const api = axios.create({
  baseURL: '/stefan'
});

export default api;