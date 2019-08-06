import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { FormsModule} from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AvatarModule } from 'ng2-avatar';
import {BrowseComponent} from './components/browse/browse.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';

import { AboutComponent } from "./components/about/about.component";
import { HelpComponent } from "./components/help/help.component";
import { FaqComponent } from "./components/faq/faq.component";
import { AlertsModule } from 'angular-alert-module';

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";
import { EditprofileComponent } from "./components/editprofile/editprofile.component";

import { CookieService } from 'ngx-cookie-service';
import { MydashboardComponent } from './components/mydashboard/mydashboard.component';
import { TopmatchesComponent } from './components/topmatches/topmatches.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,
    BrowseComponent,
    AuthorizationComponent,
    DashboardComponent,
    EditprofileComponent,
    AboutComponent,
    HelpComponent,
    FaqComponent,
    MydashboardComponent,
    TopmatchesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AvatarModule.forRoot(),
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AlertsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
