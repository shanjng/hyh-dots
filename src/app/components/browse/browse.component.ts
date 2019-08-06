import { Component, OnInit } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { NavBar } from "../../nav-bar";
import { UserService } from "../../services/user.service";
import { TwitterUser } from "../../models/twitterUser.model";
import { toBase64String } from '@angular/compiler/src/output/source_map';
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

  //grabs user from selected card and saves to local storage
  async onSelect(user: TwitterUser): Promise<void> {
    this.selectedUser = user;

    await localStorage.setItem(
      "twitterUser",
      JSON.stringify(this.selectedUser)
    );

    await localStorage.setItem(
      "twitterUser",
      JSON.stringify(this.selectedUser)
    );

    this.router.navigate(["nav/dashboard"]);
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
    //navigation
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
    console.log(this.navBar.filters)
    this.userService.getUsers(this.navBar.filters[this.navBar.filters.length-1]).then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(err => {
        console.log("err fetching users from api for browse component: ", err);
      });
  }
  filterUsers(){
    // this.filters.length=0;
    // console.log(this.filters);
    this.navBar.filters.push({
      "topic": "food",
      "count": [100000,1000000]
    
    });
    console.log(this.navBar.filters);
    localStorage.setItem("click","true");
    this.ngOnInit();
  }
}
