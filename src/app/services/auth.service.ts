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

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): void {
    this.getUsers().subscribe((users) => {
      const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (authenticatedUser) {
        this.authenticated = true;
        this.router.navigate(['/home']);
      } else {
        this.authenticated = false;
        console.log('User not found');
      }
    });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
  logout(): void {
    this.authenticated = false;
    this.router.navigate(['/loginpage']);
  }
  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
