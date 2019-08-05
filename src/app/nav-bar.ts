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
    set nav(list){
        this.navItems=list;
        console.log({"set":this.navItems});
        
      }
      get nav(){
        console.log({"get":this.navItems});
        return this.navItems;
      }
}
