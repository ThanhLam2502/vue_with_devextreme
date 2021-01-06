import ApiService from './api.service';

const PropertyService = {
  query(params) {
    return ApiService.query('properties', { params });
  },

  get(propertySlug) {
    return ApiService.get('properties', propertySlug);
  },

  post(data) {
    return ApiService.post('properties', data);
  },

};

export default PropertyService;
