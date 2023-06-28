import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sha256 } from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private salt = "skating-log-salt";

  constructor(private http: HttpClient) { }

  hashPassword(password: string): string {
    return sha256(this.salt + password);
  }
}

