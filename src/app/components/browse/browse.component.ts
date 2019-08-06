import { Component, OnInit } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { NavBar } from "../../nav-bar";
import { UserService } from "../../services/user.service";
import { TwitterUser } from "../../models/twitterUser.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {
  public navBar = new NavBar();
  users: any;
  filters: any[];
  selectedUser: TwitterUser;

  async onSelect(user: TwitterUser): Promise<void> {
    this.selectedUser = user;

    await localStorage.setItem(
      "twitterUser",
      JSON.stringify(this.selectedUser)
    );

    await localStorage.setItem("twitterUser",JSON.stringify(this.selectedUser));
    
    this.router.navigate(['nav/dashboard'])
  }

  constructor(
    private navService: NavService,
    private userService: UserService,
    private router: Router
  ) {
    this.filters = [
      {
        topic: "",
        count: 10000
      }
    ];
  }

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
      .getUsers(this.filters[0])
      .then(res => {
        this.users = res;
      })
      .catch(err => {
        console.log("err fetching users from api for browse component: ", err);
      });
  }
}
