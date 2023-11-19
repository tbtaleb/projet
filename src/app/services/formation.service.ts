import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formation } from '../classes/formation';
import { Commentaire } from '../classes/commentaire';

const url = 'http://localhost:3000/formation';
const urlC = 'http://localhost:3000/formation/';
@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor(private http: HttpClient) {}

  getFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(url);
  }

  getFormationById(id: number): Observable<Formation | undefined> {
    return this.http.get<Formation>(url+"/"+id);
  }

  addComment(formationId: number, comment: Commentaire): Observable<Formation | undefined> {
    return this.getFormationById(formationId).pipe(
      map((formation) => {
        if (formation) {
          if (!formation.comments) {
            formation.comments = [];
          }
          formation.comments.push(comment);
        }
        return formation;
      })
    );
  }

  // addComment (formationId:number,comment:Commentaire):void{
  //   let formation=this.getFormationById(formationId)
  //   if(formation){
  //     if (!formation.comments) {
  //       formation.comments = [];
  //   }
  //   }
  // }
}
