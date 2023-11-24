import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

const usersUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private usersUrl = 'http://localhost:3500/user'; // Adjust the URL based on your project structure

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>(usersUrl, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(usersUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(usersUrl + '/' + id);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(usersUrl + '/' + user.id, user);
  }

  getUserByUsername(username: string): Observable<User | undefined> {
    return this.http
      .get<User[]>(usersUrl)
      .pipe(map((users) => users.find((user) => user.username === username)));
  }

  updateUserPassword(
    userId: number,
    newPassword: string
  ): Observable<User | undefined> {
    const updateUserUrl = `${usersUrl}/${userId}`;

    return this.http.get<User[]>(usersUrl).pipe(
      map((users) => {
        const updatedUsers = users.map((user) => {
          if (user.id === userId) {
            // Mettre à jour le mot de passe pour l'utilisateur spécifié
            return { ...user, password: newPassword };
          }
          return user;
        });

        // Sauvegarder les utilisateurs mis à jour
        this.http
          .put(
            updateUserUrl,
            updatedUsers.find((user) => user.id === userId)
          )
          .subscribe(
            () => console.log('Mot de passe mis à jour avec succès')
          );

        return updatedUsers.find((user) => user.id === userId);
      })
    );
  }
}
