import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavService {
  navItems: Array<any> =  [
    {name: "  Browse  ", path:'nav/Browse'},
    {name: "  myDashboard  ", path:'nav/myDashboard'},
    {name: "  Help  ", path:'nav/help'},
    {name: "  Logout  ", path:'nav/logout'}
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