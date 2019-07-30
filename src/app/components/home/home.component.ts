import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  navItems = [
    {name:"Browse", path: "nav/browse"},
    {name:"Login", path: "nav/login"},
    {name:"Sign Up", path: "nav/register"}
  ]

  constructor(private router: Router) {

   }

  ngOnInit() {
    localStorage.setItem('navBar', JSON.stringify(this.navItems));
  }

  browse()
{
  this.router.navigate(['nav/browse']);
}
  login(){

    this.router.navigate(['nav/login']);
  }
  register(){
 
    this.router.navigate(['nav/register']);
  }
  browse(){
    this.router.navigate(['nav/browse']);
  }

}
