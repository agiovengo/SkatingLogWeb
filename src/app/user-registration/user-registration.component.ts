import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { IUserRegistrationDto } from '../interfaces/iSkatingInterfaces';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.apiService.registerUser(this.convertFormToIUserRegistrationDto()).subscribe(response => {
        console.log('User added successfully.', response);
        // Handle success, e.g., display a message or redirect
      }, error => {
        console.error('Error Adding user.', error);
        // Handle error, e.g., display an error message
      });
    }
  }

  convertFormToIUserRegistrationDto(): IUserRegistrationDto {
    return {
      username: this.registrationForm.value.username,
      password: this.registrationForm.value.password,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      email: this.registrationForm.value.email,
    };
  }
}
