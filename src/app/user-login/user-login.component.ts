import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IUserLoginDto } from '../interfaces/iSkatingInterfaces';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  model: any = {};

  constructor(private apiService: ApiService) { }

  login() {
    this.apiService.loginUser(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    });
  }
}
