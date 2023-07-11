import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { RouteData } from '../interfaces/iSkatingInterfaces';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('AuthGuard#canActivate called');

    // check if route data exists and if it has expectedRoles defined  
    if (next.data && 'expectedRoles' in next.data) {
      const expectedRolesArray: string[] = (next.data as RouteData).expectedRoles;

      console.log('isLoggedin:', this.authService.isLoggedIn());

      // Use the AuthService to check if the user is logged in and get their role
      if (this.authService.isLoggedIn()) {
        const userRole = this.authService.getTokenRole();
        console.log('userRole:', userRole);

        // check if userRole is in expectedRolesArray
        if (expectedRolesArray.includes(userRole)) {
          return true;
        }
      }
    }

    // If not logged in, or role not authorized, navigate to login page
    this.router.navigate(['login']);
    return false;
  }
}
