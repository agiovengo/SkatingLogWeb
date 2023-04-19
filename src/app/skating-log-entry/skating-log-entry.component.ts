import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-skating-log-entry',
  templateUrl: './skating-log-entry.component.html',
  styleUrls: ['./skating-log-entry.component.scss']
})
export class SkatingLogEntryComponent implements OnInit {
  skatingLogEntryForm!: FormGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.skatingLogEntryForm = new FormGroup({
      entryId: new FormControl('', Validators.required),
      entryDateTime: new FormControl('', Validators.required),
      startDateTime: new FormControl('', Validators.required),
      stopDateTime: new FormControl('', Validators.required),
      classificationId: new FormControl('', Validators.required),
      subclassId: new FormControl('', Validators.required),
      locationId: new FormControl('', Validators.required),
      basicDescription: new FormControl('', Validators.required),
      detailedDescription: new FormControl('', Validators.required),
      freestyleLevel: new FormControl('', Validators.required),
      danceLevel: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.skatingLogEntryForm.valid) {
      this.apiService.sendSkatingLogEntry(this.skatingLogEntryForm.value).subscribe(response => {
        console.log('Skating log entry submitted successfully', response);
        // Handle success, e.g., display a message or redirect
      }, error => {
        console.error('Error submitting skating log entry', error);
        // Handle error, e.g., display an error message
      });
    }
  }
}
