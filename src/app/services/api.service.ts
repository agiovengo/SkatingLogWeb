import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddLogEntry, IListContainer, ILogEntry, IUserLoginDto, IUserRegistrationDto } from '../interfaces/iSkatingInterfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl = environment.apiBaseUrl;
  private apiUserUrl = environment.apiUserUrl; 

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

  public getListContainer(): Observable<IListContainer> {
    return this.http.get<IListContainer>(`${this.apiBaseUrl}/GetListContainer`);
  }

  public addLogEntry(data: IAddLogEntry): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/AddLogEntry`, data);
  }

  public sendSampleEntry(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/AddSampleSkatingLogEntry`, data);
  }

  public registerUser(data: IUserRegistrationDto): Observable<any> {
    return this.http.post<any>(`${this.apiUserUrl}/Register`, data);
  }

  public loginUser(data: IUserLoginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUserUrl}/Login`, data);
  }
}
