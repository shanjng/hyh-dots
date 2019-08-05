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
  onSelect(user: User): void {
    
    
   this.selectedUser = user;
  }

  constructor(private navService: NavService, private userService: UserService) {}

  ngOnInit() {
    //  if (localStorage.getItem('run')=='true'){
    //    localStorage.setItem('navBar', JSON.stringify(this.navItems));
    //    window.location.reload();
    //    localStorage.setItem('run','false');
    //  }
      this.userService.getUsers().then(res=>{
        console.log(res);
        this.users=res;
      }).catch(err=>{
        console.log(err);
      })

  }

}


