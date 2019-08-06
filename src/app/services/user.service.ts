import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  //get all users from test data DEPRICATED
  getAll() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.BaseURL + "/api/user/get").subscribe(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  //get all twitter users from api

  getUsers(filters){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.post(environment.BaseURL +'/users/users',filters, {headers})
      .subscribe(response =>{
        console.log(response);
        resolve(response);
      },
      (err)=> {
        reject("err " +err);
      });
    });
  }
  updateUser(user) {
    return new Promise((resolve, reject) => {
      this.http
        .patch(environment.BaseURL + "/api/user/edit/", user)
        .subscribe(response => {
          resolve(response);
        });
    });
  }

  //get twitter user by ID from api
  getById(id) {
    return new Promise((resolve, reject)=> {
      this.http.get(environment.BaseURL + '/users/' + id)
      .subscribe(
        (response: any)=>{
          resolve(response)
        },
        err => reject(err)
      );
    });
  }


}
