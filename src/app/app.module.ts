import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/dynamic/login/login.component';
import { NavbarComponent } from './components/fixed/navbar/navbar.component';

import { HomeComponent } from './components/dynamic/home/home.component';
import { IntroductionComponent } from './components/dynamic/introduction/introduction.component';

import { LoginDivComponent } from './components/dynamic/login-div/login-div.component';
import { SignupDivComponent } from './components/dynamic/signup-div/signup-div.component';
import { LandingPageComponent } from './components/dynamic/landing-page/landing-page.component';

import {HttpClientModule} from "@angular/common/http";
import { FormationListComponent } from './components/dynamic/formation-list/formation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    IntroductionComponent,
    LoginDivComponent,
    SignupDivComponent,
    LandingPageComponent,
    FormationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
