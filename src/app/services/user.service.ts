import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

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
  getUsers(filters) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http
        .post(environment.BaseURL + "/users/users", filters, { headers })
        .subscribe(
          response => {
            resolve(response);
          },
          err => {
            reject("err " + err);
          }
        );
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
