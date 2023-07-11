import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    // Check if token exists
    if (!token) {
      return false;
    }

    // You could add more logic here to verify token expiration, etc.
    return true;
  }

  getTokenRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      return (decodedToken as any).role;
    }
    return "";
  }
}
