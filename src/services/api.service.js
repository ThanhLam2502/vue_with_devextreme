import Vue from 'vue';
import { fkProperties02, getNewId } from '@/data/property.mock';
import JwtService from '@/services/jwt.service';

const ApiService = {
  setHeader() {
    Vue.axios.defaults.headers.common.Authorization = `Token ${JwtService.getToken()}`;
  },

  get() {
    return Promise.resolve(fkProperties02(10));
  },

  post(data) {
    console.log(data);
    return Promise.resolve(getNewId());
  },
};

export default ApiService;
