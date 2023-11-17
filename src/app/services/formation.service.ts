import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formation } from '../classes/formation';

const url = 'http://localhost:3000/formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  constructor(private http: HttpClient) {}

  getFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(url);
  }

  getFormationById(id: number): Observable<Formation | undefined> {
    return this.getFormation().pipe(
      map((formations) => formations.find((formation) => formation.id === id))
    );
  }
}
