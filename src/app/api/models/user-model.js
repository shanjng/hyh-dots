fs = require("fs");
mysqlConn = require("../../data-base/data-base");

const roles =  {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
}

module.exports = class User{
         
    constructor(){
        
    }
    async getAll(){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("SELECT * FROM user",function(err,res){
                if(err){
                    reject(err)
                }else{
                    resolve(res);
                }
            }) 
        })
    }

    async createUsers(user, result){
        mysqlConn.query("INSERT INTO user set ?", user, (err, res) => {
            if (err) {
            console.log("error: ", err);
            result(err, null);
            } else {
            console.log("res: ", res);
            result(null, res);
            }
        });
    }
    findUserByName(name){
        return new Promise((resolve, reject)=>{
            mysqlConn.query("Select * from user where name=?", name, (err,res)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(res);
                }
            })
        })
    };

    findUserById(userId,user){
        return new Promise((resolve, reject)=>{
            mysqlConn.query("Select * from user where id=?", userId, (err,res)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(res);
                }
            })
        })
    };

    updateUserById(userId,user){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("UPDATE user SET user=? WHERE id=?", [user,userId],(err,res)=>{
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            })
        })
    }

    removeUser(userId){
        return new Promise((resolve,reject)=>{
            mysqlConn.query("DELETE FROM user WHERE id=?", userId,(err,res)=>{
                if (err){
                    reject(err);
                }
                else{
                    resolve(res);
                }
            })
        })
    }
};