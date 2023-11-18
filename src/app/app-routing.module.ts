import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dynamic/login/login.component';
import { LoginDivComponent } from './components/dynamic/login-div/login-div.component';
import { SignupDivComponent } from './components/dynamic/signup-div/signup-div.component';
import { LandingPageComponent } from './components/dynamic/landing-page/landing-page.component';
import { HomeComponent } from './components/dynamic/home/home.component';
import { FormationListComponent } from './components/dynamic/formation-list/formation-list.component';
import { SelectedFormationComponent } from './components/dynamic/selected-formation/selected-formation.component';
import { MainComponent } from './components/dynamic/main/main.component';

const routes: Routes = [
  { path: 'landingpage', title: 'Welcome', component: LandingPageComponent },
  {
    path: 'loginpage',
    title: 'LoginPage',
    component: LoginComponent,
    children: [
      { path: 'login', title: 'Login', component: LoginDivComponent },
      { path: 'signup', title: 'Sign Up', component: SignupDivComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'formationList',
    title: 'Formation',
    component: FormationListComponent,
  },
  {
    path: 'formationList/:idf',
    title: 'FormationDetail',
    component: SelectedFormationComponent,
  },
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        title: 'main',
        component: MainComponent,
      },
      {
        path: 'events',
        title: 'events',
        component: FormationListComponent,
      },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
