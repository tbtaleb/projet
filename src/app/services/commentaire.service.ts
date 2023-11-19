import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../classes/formation';
import { BehaviorSubject, Observable } from 'rxjs';

const urlF = 'http://localhost:3000/formation';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private formations: Formation[] = [];
  private formationsSubject = new BehaviorSubject<Formation[]>(this.formations);
  private apiUrl = 'assets/formations.json'; 
  
  constructor(private http: HttpClient) { }

  getFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(urlF);
  }
  
}
