import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public name: string;
  public email: string;
  public password: string;
  dumbyData = ["Brand", "Influencer"];
  constructor(private router: Router) {}

  ngOnInit() {}

  //navigate to login
  login() {
    this.router.navigate(["/login"]);
  }
  
  join() {
    localStorage.setItem("run", "true");
    this.router.navigate(["authorize"]);
  }
}
