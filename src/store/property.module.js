// import SET_PROPERTY from './mutations.type';
// import FETCH_PROPERTIES from './actions.type';
// import PropertyService from '../services/property.service.ts';
//
// const propertyState = {
//   properties: [],
//   propertiesCount: 0,
// };
// const getters = {
//   properties(state) {
//     return state.properties;
//   },
//   propertiesCount(state) {
//     return state.propertiesCount;
//   },
// };
//
// const actions = {
//   async [FETCH_PROPERTIES](context) {
//     const { data } = await PropertyService.getProperties();
//     console.log(data);
//     context.commit(SET_PROPERTY, data);
//     return data.properties;
//   },
// };
//
// const mutations = {
//   [SET_PROPERTY](state, properties) {
//     state.properties = properties;
//   },
// };
//
// export default {
//   state: propertyState,
//   actions,
//   mutations,
//   getters,
// };
