import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class NavService {
  navItems: Array<any> = [
    { name: "  Browse  ", path: "nav/browse" },
    { name: "  myDashboard  ", path: "nav/myDashboard" },
    { name: "  Help  ", path: "nav/help" },
    { name: "  Logout  ", path: "nav/login" }
  ];

  constructor(router: Router) {}
  //reload navigation
  async reloadNav() {
    localStorage.setItem("nav", "false");
    return new Promise((resolve, reject) => {
      localStorage.setItem("navBar", JSON.stringify(this.navItems));
      window.location.reload();
    });
  }
}
