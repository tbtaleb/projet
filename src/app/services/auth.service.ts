import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/user'; // Adjust the URL based on your project structure

  private authenticated = false;
  private isAdmin = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): void {
    this.getUsers().subscribe((users) => {
      const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (authenticatedUser) {
        this.authenticated = true;
        this.isAdmin = authenticatedUser.isAdmin;

        if (this.isAdmin) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/home']);
        }
      } else {
        this.authenticated = false;
        console.log('User not found');
      }
    });
  }

  logout(): void {
    this.authenticated = false;
    this.isAdmin = false;
    this.router.navigate(['/loginpage']);
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  private getUsers() {
    return this.http.get<any[]>(this.usersUrl);
  }
}
