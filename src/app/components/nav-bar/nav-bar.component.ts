import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavBar} from '../../nav-bar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public navBar = new NavBar()

  constructor(
    private router: Router
    ) { }

  ngOnInit() { }

  navTo(nav){
    this.router.navigate([nav.path]);
  }
}
