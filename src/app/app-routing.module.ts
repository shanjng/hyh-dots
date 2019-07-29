import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowseComponent } from './components/browse/browse.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nav', component: NavBarComponent, children:[
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'browse', component: BrowseComponent},
  ]},
  { path: 'authorize', component: AuthorizationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
