import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { FormsModule} from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AvatarModule } from 'ng2-avatar';
import {BrowseComponent} from './components/browse/browse.component'
import {AuthorizationComponent} from './components/authorization/authorization.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,
    BrowseComponent,
    AuthorizationComponent,
    AboutComponent,
    HelpComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    HttpModule, 
    FormsModule,
    AvatarModule.forRoot(),
    MatToolbarModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
