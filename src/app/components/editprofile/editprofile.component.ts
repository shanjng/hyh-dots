import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class EditprofileComponent implements OnInit {
  public user = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user.id = localStorage.getItem("userid");
    this.getById();
  }

  //edit user
  edit() {
    this.userService
      .updateUser(this.user)
      .then(res => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
    this.router.navigate(["nav/myDashboard"]);
  }

  //get user by ID
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

  setEthnicity(ethnicity) {
    this.user.ethnicity = ethnicity;
  }
}
