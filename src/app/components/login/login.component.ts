import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService, UserService } from '../../services/index'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authUser = new User()

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    ) { }

  ngOnInit() {
  }

  // async presentAlert(source, err) {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Alert',
  //     subHeader: 'Problem with ' + source,
  //     message: err,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  routeTo(dest) {
    this.router.navigate([dest]);
  }

  login() {
    this.authService.login(this.authUser).then((res: User) => {

      const testId = localStorage.getItem('userid');
      console.log(testId);

      this.router.navigate(['home'], {
        queryParams: {
          // puts id (res-ponse) in the URL ?user=userid
          user: res.id
        }
      }); 
    }).catch(err => {
      console.log("Error: ", err)
    })
  }

  register(){
    this.router.navigate(['register']);
  }

  getAll() {
    this.userService.getAll()
    .then(res => console.log("Success with Login!: ", res))
    .catch(err => console.log("Failed Login: ", err))
  }
}
