import { fkProperties02, getNewId } from '../data/property.mock';

const ApiService = {
  get() {
    return Promise.resolve(fkProperties02(10));
  },

  post(data) {
    console.log(data);
    return Promise.resolve(getNewId());
  },
};

export default ApiService;
