const userService = require("./user-service");
const User = require("../models/user-model")

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
}

module.exports = class AuthService {
    constructor() {}

    login(authUser) {
        // Get users
        // Loop through users find user by email
        // Validate the password
        // if successful return the user
        return new Promise((resolve, reject) => {
            userService.prototype.getAll()
            .then(users => {
                // const users = JSON.parse(userJSON).users;
                users.forEach(user => {
                    if (user.email == authUser.email) {
                        if (user.password == authUser.password)
                            resolve(user)
                    }
                })
                reject("User not found")
            })
            .catch(err => {
                console.log(err)
                reject(err);
            })
        })

    }

    //  register(user) {
    //     return new Promise((resolve, reject) => {

    //         User.prototype.getAll((err, data) => {
    //             if (err) {s
    //                 reject(err)
    //             }

    //             data.forEach(existingUser => {
    //                 if (existingUser.email == user.email) {
    //                     reject("This email address already has been used")
    //                 }
    //             })

    //             let hashPassword;
    //             this.hashPassword(user.password).then((hashPass) => {
    //                 hashPassword = hashPass;
    //             }).catch((err) => {
    //                 console.log(err)
    //                 reject(err)
    //             })

    //             const userObj = {
    //                 firstName: user.firstName,
    //                 lastName: user.lastName,
    //                 cellPhone: user.cellPhone,
    //                 email: user.email,
    //                 password: hashPassword,
    //                 role: roles.USER
    //             }

    //             const newUser = new User(userObj);

    //             User.prototype.createUser(newUser, (err, res) => {
    //                 if (err) reject(err);
    //                 resolve(res);
    //             })
    //         })
    //     })
    // }
}