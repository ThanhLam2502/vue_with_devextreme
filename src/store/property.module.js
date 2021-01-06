import { FETCH_END, FETCH_START } from '@/store/mutations.type';

import { ADD_PROPERTY, FETCH_PROPERTIES } from './actions.type';
import PropertyService from '../services/property.service';

const propertyState = {
  properties: [],
  isLoading: true,
};
const getters = {
  properties(state) {
    return state.properties;
  },
  isLoading(state) {
    return state.isLoading;
  },
};

const actions = {
  async [FETCH_PROPERTIES](context, params) {
    context.commit(FETCH_START);
    const { data } = await PropertyService.query(params.filters);
    context.commit(FETCH_END, data);
  },

  async [ADD_PROPERTY](context, property) {
    const { data } = await PropertyService.post(property);
    console.log(data);
    return data.id;
  },
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, properties) {
    state.properties = properties;
    state.isLoading = false;
  },
};

export default {
  state: propertyState,
  actions,
  mutations,
  getters,
};
