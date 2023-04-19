import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl = 'https://localhost:7258';

  constructor(private http: HttpClient) { }

  public getExample(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/SkateLog`);
  }

  public sendSkatingLogEntry(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/SkateLog`, data);
  }
}
