import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router:Router){}
  isScrolled = false;

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowScroll() {
    if (window.scrollY > 60 || window.innerWidth <= 991.9) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  goToLogin(){
    this.router.navigate(["/loginpage"])
  }
}
