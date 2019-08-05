import { Component, OnInit } from '@angular/core';
import {NavService} from '../../services/nav.service';
import { NavBar } from '../../nav-bar'
import {UserService} from '../../services/user.service';
import {User} from '../../models/twitterUser.model'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  public navBar = new NavBar()
  users: any;
  selectedUser: User;
  filters: any[];

  onSelect(user: User): void {  
   this.selectedUser = user;
  }

  constructor(private navService: NavService, private userService: UserService) {
    this.filters=[
      {
        topic: "",
        count: 10000
      }
    ]
  }

  ngOnInit() {
    if (localStorage.getItem('nav')==='true'){
      this.navService.reloadNav().then(res=>{
        console.log(res);
  
      }).catch(err=>{
        console.log(err);
      }) 
    }
      this.userService.getUsers(this.filters[0]).then(res=>{
        console.log(res);
        this.users=res;
      }).catch(err=>{
        console.log(err);
      })
      

  }


}


