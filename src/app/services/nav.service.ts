import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavService {
  navItems: Array<any> =  [
    {name: "  Browse  ", path:'/browse'},
    {name: "  myDashboard  ", path:'/myDashboard'},
    {name: "  Help  ", path:'/help'},
    {name: "  Logout  ", path:'/logout'}
  ];



  

  constructor(router: Router) { }

  async reloadNav(){
    localStorage.setItem('run', "true");
    return new Promise((resolve,reject)=>{
      localStorage.setItem('navBar', JSON.stringify(this.navItems));
      window.location.reload();
    })
    }
  }