import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenavModule} from '@angular/material';
import {NavService} from '../../services/nav.service';
import {NavBar} from '../../nav-bar';import { resolve } from 'q';
;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public navBar = new NavBar()
  nav: any;

  constructor(
    private router: Router,
    private navbarService: NavService
    ) { }

  ngOnInit() {
    // if (localStorage.getItem('nav')==='true'){
    //   this.navbarService.reloadNav().then(res=>{
    //     console.log(res);
  
    //   }).catch(err=>{
    //     console.log(err);
    //   })
        
    // }
    // }
    this.nav=JSON.parse(localStorage.getItem('navBar'));
    // console.log(this.navBar.navItems)
    console.log(this.nav)
  
   }

  navTo(nav){

    this.router.navigate([nav.path]);
  }
}
