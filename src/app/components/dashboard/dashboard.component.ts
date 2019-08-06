import { TwitterUser } from "./../../models/twitterUser.model";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public user = new User();
  public twitterUser = new TwitterUser();
  // rate : number;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }
    
    async ngOnInit() {
      //this.user.id = localStorage.getItem('userid');
      this.getById();
      
      this.twitterUser = JSON.parse(localStorage.getItem('twitterUser'));
      // this.rate = ((this.twitterUser.status.favorite_count + this.twitterUser.status.retweet_count) / this.twitterUser.followers_count) * 100
        }
    

  edit() {
    this.userService
      .updateUser(this.user)
      .then(res => {
        window.location.reload();
        this.router.navigate(["dashboard"]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getById() {
    this.userService
      .getById(this.user.id)
      .then((res: User) => {
        this.user = res;
        console.log("user: ", this.user);
      })
      .catch(err => {
        console.log(err);
      });
  }


  
}
