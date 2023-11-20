import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

const usersUrl = 'http://localhost:3500/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private usersUrl = 'http://localhost:3500/user'; // Adjust the URL based on your project structure

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(usersUrl);
  }

  getUserById(id: number): Observable<User | undefined> {
    return this.http.get<User>(usersUrl+"/"+id);
  }
}
