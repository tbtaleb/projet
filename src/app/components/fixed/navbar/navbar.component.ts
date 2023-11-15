import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  @HostListener('window:resize', [])
  onWindowScroll() {
    if (window.scrollY > 80 || window.innerWidth <= 991.9) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
