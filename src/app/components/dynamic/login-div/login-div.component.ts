import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-div',
  templateUrl: './login-div.component.html',
  styleUrls: ['./login-div.component.css']
})
export class LoginDivComponent {
  constructor(private router:Router){}

  toHome(){
    this.router.navigate(['/home']);
  }
}
