import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/dynamic/login/login.component';
import { NavbarComponent } from './components/fixed/navbar/navbar.component';
import { HomeComponent } from './components/dynamic/home/home.component';
import { IntroductionComponent } from './components/dynamic/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
