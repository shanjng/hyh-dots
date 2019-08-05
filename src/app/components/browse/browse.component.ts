import { Component, OnInit } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { NavBar } from "../../nav-bar";
import { UserService } from "../../services/user.service";
import { TwitterUser } from "../../models/twitterUser.model";

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {
  public navBar = new NavBar();
  users: any;

  selectedUser: TwitterUser;
  onSelect(user: TwitterUser): void {

    this.selectedUser = user;
    localStorage.setItem("TwitterUser",JSON.stringify(this.selectedUser));
    
  }

  constructor(
    private navService: NavService,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("nav") === "true") {
      this.navService
        .reloadNav()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
    this.userService
      .getUsers()
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
