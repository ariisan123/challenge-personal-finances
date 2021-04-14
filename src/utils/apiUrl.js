const API_PORT = 8000;
const DB_HOST = 'localhost';

export const endpoints = {
  login: '/api/login',
  signup: '/api/signup',
  opNew: '/api/operations/new',
  opDelete(id) {
    return `/api/operations/${id}`;
  },
  opEdit(id) {
    return `/api/operations/${id}`;
  },
  operations(endpoint) {
    return `/api/operations/${endpoint}`;
  }
};

export const url = `http://${DB_HOST}:${API_PORT}`;
console.log(url);

export const setUrl = (endpoint) => {
  return `${url}${endpoint}`;
};
