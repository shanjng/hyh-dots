import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment.prod"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

   getAll() {
    return new Promise((resolve, reject) => {
      this.http
        .get(environment.BaseURL + "/api/user/get")
        .subscribe(
          (response) => {
            resolve(response)
          },
          (err) => {
            reject(err)
          }
        )
    })
  }
}
