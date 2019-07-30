import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavBar} from '../../nav-bar'
import {NavService} from '../../services/nav.service';
import { AuthService, UserService } from '../../services/index'
import { User } from '../../models/user.model'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authUser = new User();

  public email: string;
  public password: string;
  nav= new NavBar();
  navItems = [
    {name: "  Browse  ", path:'nav/Browse'},
    {name: "  myDashboard  ", path:'nav/myDashboard'},
    {name: "  Help  ", path:'nav/help'},
    {name: "  Logout  ", path:'nav/logout'}
  ]   


  constructor(private router: Router, private navService: NavService,    private authService: AuthService,
    private userService: UserService,) { 
  }

  ngOnInit() {

  }

  register(){
    this.router.navigate(['nav/register']);
  }

   login(){
    // localStorage.setItem('navBar',JSON.stringify(this.navItems));
    // window.location.reload();
    localStorage.setItem('run','true');
    // this.authService.login(this.authUser).then((res: User) => {

    //   const testId = localStorage.getItem('userid');
    //   console.log(testId);
    this.router.navigate(['nav/browse']);
        // queryParams: {
        //   // puts id (res-ponse) in the URL ?user=userid
        //   user: res.id
        //  }
    //   }); 
    // }).catch(err => {
    //   console.log("Error: ", err)
    // })
    
   


    
  }

}
