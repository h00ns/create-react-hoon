import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const API = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

/** Request */
API.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    return config;
  },

  function (error) {
    return Promise.reject(error);
  },
);

/** Response */
API.interceptors.response.use(
  async function (response: AxiosResponse) {
    return response;
  },

  async function (error) {
    return Promise.reject(error);
  },
);
