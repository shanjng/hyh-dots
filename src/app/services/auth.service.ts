import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //calls api to log in user
  login(authUser) {
    return new Promise((resolve, reject) => {
      console.log("Authuser: ", authUser);

      const headers = new HttpHeaders();

      this.http
        .post(environment.BaseURL + "/api/auth/login", authUser, { headers })
        .subscribe(
          (response: any) => {
            console.log("response: ", response);
            localStorage.setItem("userid", response.id);
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
