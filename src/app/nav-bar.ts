export class NavBar {
  public navItems: Array<any> = [
    { name: "What We Do", path: "/nav/about" },
    { name: "Browse", path: "/nav/browse" },
    { name: "Login", path: "/nav/login" },
    { name: "Sign Up", path: "/nav/register" }
  ];

  
    public loggedInNav: Array<any> =[
      {name:"Browse", path: "/browse"},
      {name: "Dashboard", path: "/myDashboard"},
      {name: "Help", path: "/help"},
      {name: "Logout", path: "/login"}
    ];

    public filters: Array<any> =[
      { topic: undefined,
        count: undefined,
         location: undefined,
          verified: undefined
      }
    ];

}
