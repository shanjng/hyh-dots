import { Component, OnInit } from '@angular/core';
import {NavService} from '../../services/nav.service';
import { NavBar } from '../../nav-bar'
import {UserService} from '../../services/user.service';
import {TwitterUser} from '../../models/twitterUser.model'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  public navBar = new NavBar()
  users: any;
  navItems: Array<any>
  // constructor(private navService: NavService, private userService: UserService) {
  //   this.navItems=  [
  //     {name: "   Browse   ", path:'nav/browse'},
  //     {name: "   myDashboard    ", path:'nav/myDashboard'},
  //     {name: "   Help   ", path:'nav/help'},
  //     {name: "   Logout   ", path:'nav/logout'}
  //   ] 

  selectedUser: TwitterUser;
  onSelect(twitterUser: TwitterUser): void {
    
    
   this.selectedUser = twitterUser;
  }

  constructor(private navService: NavService, private userService: UserService) {}

  ngOnInit() {
    if (localStorage.getItem('nav')==='true'){
      this.navService.reloadNav().then(res=>{
        console.log(res);
  
      }).catch(err=>{
        console.log(err);
      }) 
    }
      this.userService.getUsers().then(res=>{
        console.log(res);
        this.users=res;
      }).catch(err=>{
        console.log(err);
      })
      

  }


}


