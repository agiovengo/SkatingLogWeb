import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl = 'https://localhost:7258/SkateLog';

  constructor(private http: HttpClient) { }

  public getEntries(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/GetSkatingLogEntries`);
  }

  public getLocations(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/GetLocations`);
  }

  public getClassifications(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/GetClassifications`);
  }

  public getSubclasses(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/GetSubclasses`);
  }

  public sendSkatingLogEntry(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/AddSkatingLogEntry`, data);
  }

  public sendSampleEntry(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/AddSampleSkatingLogEntry`, data);
  }
}
