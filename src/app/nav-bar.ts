export class NavBar {
    public navItems: Array<any> =[
        {name: "What We Do", path: "/about"},
        {name:"Browse", path: "/browse"},
        {name:"Login", path: "/login"},
        {name:"Sign Up", path: "/register"},
        {name: "Dashboard", path: "/myDashboard"},
        {name: "Help", path: "/help"},
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
