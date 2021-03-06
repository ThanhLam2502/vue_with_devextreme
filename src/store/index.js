import Vue from 'vue';
import Vuex from 'vuex';

import property from './property.module';
import auth from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    property,
    auth,
  },
});
