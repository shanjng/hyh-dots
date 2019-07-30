import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenavModule} from '@angular/material';
import {NavService} from '../../services/nav.service';
import {NavBar} from '../../nav-bar';;




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
   navItems :Array<any>;


  constructor(private router: Router) {

   }

  ngOnInit() {
    this.navItems= JSON.parse(localStorage.getItem('navBar'));

    
  }

  navTo(nav){
    this.router.navigate([nav.path]);


  }


}
