import { SET_PROPERTY } from './mutations.type';
import { FETCH_PROPERTIES, ADD_PROPERTY } from './actions.type';
import PropertyService from '../services/property.service';

const propertyState = {
  properties: [],
  propertiesCount: 0,
};
const getters = {
  properties(state) {
    return state.properties;
  },
  propertiesCount(state) {
    return state.propertiesCount;
  },
};

const actions = {
  async [FETCH_PROPERTIES](context) {
    const data = await PropertyService.get();
    context.commit(SET_PROPERTY, data);
  },

  async [ADD_PROPERTY](context, data) {
    const iD = await PropertyService.post(data);
    return iD;
  },
};

const mutations = {
  [SET_PROPERTY](state, properties) {
    state.properties = properties;
  },
};

export default {
  state: propertyState,
  actions,
  mutations,
  getters,
};
