export default class PropertyModel {
  constructor(options = {}) {
    Object.assign(this, {
      check: '',
      photo: '',
      propertyID: '',
      country: '',
      city: '',
      location: '',
      projectName: '',
      developerName: '',
      propertyType: '',
    }, options);
  }
}
