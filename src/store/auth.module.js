import JwtService from '@/services/jwt.service';
import {
  LOGIN, LOGOUT, REGISTER,
} from '@/store/actions.type';
import { PURGE_AUTH, SET_AUTH, SET_ERROR } from '@/store/mutations.type';
import ApiService from '@/services/api.service';

const authState = {
  error: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve) => {
      ApiService.post('login', credentials)
        .then(({ data }) => {
          const token = data.accessToken;
          const user = { ...credentials, token };
          ApiService.setHeader();
          context.commit(SET_AUTH, user);
          resolve(user);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post('users', credentials)
        .then(({ data }) => {
          const token = data.accessToken;
          delete ApiService.setHeader();
          // const user = { ...credentials, token };
          // context.commit(SET_AUTH, user);
          resolve(token);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
          reject(response);
        });
    });
  },

  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.error = {};
    JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.error = {};
    JwtService.destroyToken();
  },
};

export default {
  state: authState,
  actions,
  getters,
  mutations,
};
