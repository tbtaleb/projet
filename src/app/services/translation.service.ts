import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private baseUrl = 'https://text-translator2.p.rapidapi.com';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '9140ce385amsh3ee5a42f69f9e48p1dddeajsn1597ced22929',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl+"/getLanguages");
  }

  translateText(
    sourceLanguage: string,
    targetLanguage: string,
    text: string
  ): Observable<string> {
    const url = `${this.baseUrl}/translate`;
    const body = new HttpParams()
      .set('source_language', sourceLanguage)
      .set('target_language', targetLanguage)
      .set('text', text);

    return this.http.post<string>(url, body.toString(), {
      headers: this.headers,
    });
  }
}
