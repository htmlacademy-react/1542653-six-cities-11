import axios, { AxiosInstance } from 'axios';
import {REQUEST_TIMEOUT, SERVER_URL} from './../const';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
