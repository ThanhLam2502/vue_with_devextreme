export default class PropertyModel {
  constructor(options = {}) {
    Object.assign(this, {
      check: false,
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
