import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { User } from "../../models/user.model";
@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.scss"]
})
export class BrowseComponent implements OnInit {
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  users: any;
  navItems: Array<any>;
  constructor(private navService: NavService, private http: HttpClient) {
     
    this.navItems = [
      { name: "   Browse   ", path: "nav/Browse" },
      { name: "   myDashboard    ", path: "nav/myDashboard" },
      { name: "   Help   ", path: "nav/help" },
      { name: "   Logout   ", path: "nav/logout" }
    ];
  }

  ngOnInit() {
    if (localStorage.getItem("run") == "true") {
      localStorage.setItem("navBar", JSON.stringify(this.navItems));
      window.location.reload();
      localStorage.setItem("run", "false");
      
      this.getUsers().then(res=>{
        this.users=res;
      }).catch(err=>{
        console.log(err);
      })
    }
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.get("http://localhost:8300/users/users", { headers }).subscribe(
        response => {
          resolve(response);
        },
        err => {
          reject("err " + err);
        }
      );
    });
  }
}
