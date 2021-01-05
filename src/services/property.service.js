import ApiService from './api.service';

const PropertyService = {

  async get() {
    return ApiService.get();
  },

  async post(data) {
    return ApiService.post(data);
  },

};

export default PropertyService;
