export class NavBar {
  public navItems: Array<any> = [
    { name: "What We Do", path: "/nav/about" },
    { name: "Browse", path: "/nav/browse" },
    { name: "Login", path: "/nav/login" },
    { name: "Sign Up", path: "/nav/register" }
  ];

  public loggedInNav: Array<any> = [
    { name: "Browse", path: "/nav/browse" },
    { name: "Dashboard", path: "/nav/myDashboard" },
    { name: "Help", path: "/nav/help" },
    { name: "Logout", path: "/nav/login" }
  ];
  set nav(list) {
    this.navItems = list;
    console.log({ set: this.navItems });
  }
  get nav() {
    console.log({ get: this.navItems });
    return this.navItems;
  }
}
