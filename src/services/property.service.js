import fakeProperties from '../data/property.mock';

export default class PropertyService {
  static getProperties() {
    return fakeProperties();
  }
}
