import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private http: HttpClient) { }

  public getByCountry(userId) {
    return new Promise((resolve,reject)=>{
      const headers = new HttpHeaders();
      this.http.get("https://graph.facebook.com/v2.11/user-id?fields=location&access_token=user_access_token",userId).subscribe((response: any)=>{
          console.log(response.id);
      })
    })
  }
}
