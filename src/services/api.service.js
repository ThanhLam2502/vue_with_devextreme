import Vue from 'vue';
import JwtService from '@/services/jwt.service';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { API_URL } from '../common/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common.Authorization = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  get(resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`)
      .then((res) => res)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },
};

export default ApiService;
