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
import { FormationComponent } from './components/dynamic/formation/formation.component';
import { SelectedFormationComponent } from './components/dynamic/selected-formation/selected-formation.component';
import { MainComponent } from './components/dynamic/main/main.component';
import { AboutUsComponent } from './components/dynamic/about-us/about-us.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dynamic/dashboard/dashboard.component';
import { AdmiNavBarComponent } from './components/fixed/admi-nav-bar/admi-nav-bar.component';
import { AdminFooterComponent } from './components/fixed/admin-footer/admin-footer.component';
import { AdminSideBarComponent } from './components/dynamic/admin-side-bar/admin-side-bar.component';
import { UserListComponent } from './components/dynamic/user-list/user-list.component';


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
    FormationListComponent,
    FormationComponent,
    SelectedFormationComponent,
    MainComponent,
    AboutUsComponent,
    DashboardComponent,
    AdmiNavBarComponent,
    AdminFooterComponent,
    AdminSideBarComponent,
    UserListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
