import { Component, OnInit } from '@angular/core';
import {NavService} from '../../services/nav.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  users: any;
  navItems: Array<any>
  constructor(private navService: NavService, private userService: UserService) {
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
      this.userService.getUsers().then(res=>{
        console.log(res);
        this.users=res;
      }).catch(err=>{
        console.log(err);
      })

  }



  }


