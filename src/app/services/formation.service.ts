import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../classes/formation';

const url ="http://localhost:3000/formation"

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }

  getFormation():Observable<Formation[]>{
    return this.http.get<Formation[]>(url);
  }
}
