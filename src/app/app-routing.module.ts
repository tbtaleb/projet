import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dynamic/login/login.component';
import { LoginDivComponent } from './components/dynamic/login-div/login-div.component';
import { SignupDivComponent } from './components/dynamic/signup-div/signup-div.component';
import { LandingPageComponent } from './components/dynamic/landing-page/landing-page.component';

const routes: Routes = [
  {path:'landingpage', title:'Welcome', component:LandingPageComponent,},
  {path:'loginpage', title:'LoginPage', component:LoginComponent,children:[
    {path:'login', title:'Login', component:LoginDivComponent},
    {path:'signup', title:'Sign Up', component:SignupDivComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full' },
  ]},
  {path: '', redirectTo: 'landingpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
