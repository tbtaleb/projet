import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formation } from '../classes/formation';
import { Commentaire } from '../classes/commentaire';

const url = 'http://localhost:3000/formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor(private http: HttpClient) {}

  getAllFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(url);
  }
  getFormation(
    searchValue: string,
    typeValue: number
  ): Observable<Formation[]> {
    if (typeValue == 1) {
      return this.http.get<Formation[]>(
        ` ${url}?name_like=${searchValue}&workshop=true`
      );
    } else if (typeValue == 2) {
      return this.http.get<Formation[]>(
        ` ${url}?name_like=${searchValue}&workshop=false`
      );
    } else {
      return this.http.get<Formation[]>(` ${url}?name_like=${searchValue}`);
    }
  }

  getFormationById(id: number): Observable<Formation | undefined> {
    return this.http.get<Formation>(url + '/' + id);
  }

  updateFormation(formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(url + '/' + formation.id, formation);
  }

  // addComment(
  //   formationId: number,
  //   comment: Commentaire
  // ): Observable<Commentaire | undefined> {
  //   return this.getFormationById(formationId).pipe(
  //     map((formation) => {
  //       if (formation) {
  //         if (!formation.comments) {
  //           formation.comments = [];
  //         }
  //         formation.comments.push(comment);
  //       }
  //       return comment;
  //     })
  //   );
  // }
}
