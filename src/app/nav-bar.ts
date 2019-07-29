export class NavBar {
    private navItems: Array<any> =[
        {name:"Browse", path: "nav/browse"},
        {name:"Login", path: "nav/login"},
        {name:"Sign Up", path: "nav/register"}
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
