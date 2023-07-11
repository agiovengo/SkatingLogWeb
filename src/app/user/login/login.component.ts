import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: any = {};

  constructor(private apiService: ApiService, private router: Router) { 
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation End:', event);
      }
      if (event instanceof NavigationError) {
        console.log('Navigation Error:', event.error);
      }
    });
  }

  login() {
    this.apiService.loginUser(this.model).subscribe(next => {
      console.log('Logged in successfully');
      this.router.navigate(['/dashboard']).then(success => {
          if (success) {
              console.log('Navigation successful');
          } else {
              console.log('Navigation has failed');
          }
      }).catch(err => {
          console.log('Navigation error:', err);
      });
    }, error => {
      console.log('Failed to login');
    });
}

  register() {
    this.router.navigate(['/registration']);
  }
}
