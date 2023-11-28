import axios from 'axios';
import { API_BASE_URL } from './constants';
import store from '@/store';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';

axios.interceptors.request.use(request => {
  const token = store.getState().userAuth.token;

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});
