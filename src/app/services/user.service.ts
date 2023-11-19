import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'http://localhost:3000/user'; // Adjust the URL based on your project structure

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserByUsername(username: string): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users) => users.find((user) => user.username === username))
    );
  }
}
