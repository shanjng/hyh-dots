import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowseComponent } from './components/browse/browse.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  { path: '', component: NavBarComponent, children:[
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'browse', component: BrowseComponent },
      { path: 'myDashboard', component: DashboardComponent},
      { path: 'about', component: AboutComponent },
      { path: 'help', component: HelpComponent },
      {path: 'faq', component: FaqComponent}
    ]},
  { path: 'authorize', component: AuthorizationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
