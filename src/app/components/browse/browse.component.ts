import { Component, OnInit } from '@angular/core';
import {NavService} from '../../services/nav.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  navItems: Array<any>
  constructor(private navService: NavService) {
    this.navItems=  [
      {name: "   Browse   ", path:'nav/Browse'},
      {name: "   myDashboard    ", path:'nav/myDashboard'},
      {name: "   Help   ", path:'nav/help'},
      {name: "   Logout   ", path:'nav/logout'}
    ] 

  }

  ngOnInit() {
    if (localStorage.getItem('run')=='true'){
      localStorage.setItem('navBar', JSON.stringify(this.navItems));
      window.location.reload();
      localStorage.setItem('run','false');
    }



  }


}
