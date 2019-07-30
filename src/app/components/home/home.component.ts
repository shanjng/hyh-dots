import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  navItems = [
    {name:"Browse", path: "/browse"},
    {name:"Login", path: "/login"},
    {name:"Sign Up", path: "/register"}
  ]

  constructor(private router: Router) {

   }

  ngOnInit() {
    localStorage.setItem('navBar', JSON.stringify(this.navItems));
  }

  login(){

    this.router.navigate(['/login']);
  }
  register(){
 
    this.router.navigate(['/register']);
  }
  browse(){
    this.router.navigate(['/browse']);
  }

}
