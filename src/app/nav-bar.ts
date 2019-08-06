export class NavBar {
    public navItems: Array<any>=[
    {name:"What We Do", path: "/about"},
    {name:"Browse", path: "/browse"},
    {name:"Login", path: "/login"},
    {name:"Sign Up", path: "/register"}
    ]

  
    public loggedInNav: Array<any> =[
      {name:"Browse", path: "/browse"},
      {name: "Dashboard", path: "/myDashboard"},
      {name: "Help", path: "/help"},
      {name: "Logout", path: "/login"}
    ];

    public filters: Array<any> =[
      { topic: ""}
    ];

}
