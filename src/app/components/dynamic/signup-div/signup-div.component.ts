import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-div',
  templateUrl: './signup-div.component.html',
  styleUrls: ['./signup-div.component.css']
})
export class SignupDivComponent {
  constructor(private router:Router) { }

  toHome(){
    this.router.navigate(['/home']);
  }
}
