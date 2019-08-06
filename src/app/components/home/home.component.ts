import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavBar } from "../../nav-bar";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  nav = [
    { name: "What We Do", path: "nav/about" },
    { name: "Browse", path: "nav/browse" },
    { name: "Login", path: "nav/login" },
    { name: "Sign Up", path: "nav/register" }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.setItem("nav", "false");
    localStorage.setItem("navBar", JSON.stringify(this.nav));
  }

  //navigation
  navTo(nav) {
    this.router.navigate([nav.path]);
  }
}
