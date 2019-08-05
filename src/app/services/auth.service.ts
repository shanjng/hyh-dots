import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(authUser) {
    return new Promise((resolve, reject) => {
      
      // headers: key value pairs for metadata 
      const headers = new HttpHeaders();

      this.http.post('http://localhost:5000' + "/api/auth/login", authUser, { headers }).subscribe(
        (response: any) => {
          console.log("response: ", response)
        localStorage.setItem("userid", response.id);
        resolve(response)
      },
        (err) => {
          reject(err)
        }
      ) 
    })
  }
}
