const User = require("../models/user-model");

module.exports = class UserService {
  constructor() {}

  getAll() {
    return new Promise((resolve, reject) => {
      User.prototype
        .getAll((err, res) => {
            if (err) {
              reject(err);
            }
              resolve(res);
        });
    });
  }
  
  // register(newUser) {
  //   return new Promise((resolve, reject) => {
  //       User.prototype
  //         .create(newUser, (err, res) => {
  //           if (err) {
  //             reject(err);
  //           }
  //             resolve(res);
  //       });
  //   });
  // }
}