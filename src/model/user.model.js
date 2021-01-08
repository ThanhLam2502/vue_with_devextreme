export default class UserModel {
  constructor(options = {}) {
    Object.assign(this, {
      userName: '',
      passWord: '',
    }, options);
  }
}
