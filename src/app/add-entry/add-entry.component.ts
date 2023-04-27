import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IClassification, ILocation, ISubclass } from '../interfaces/iSkatingInterfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  addEntryForm!: FormGroup;
  locationList: ILocation[] = [];
  classificationList: IClassification[] = [];
  subclassList: ISubclass[] = [];

  constructor(private apiService: ApiService) {
    this.getLocations();
    this.getClassifications();
    this.getSubclasses();
  }

  getLocations() {
    this.apiService.getLocations().subscribe(
      (data) => {
        this.locationList = data;
      },
      (error) => {
        console.error('API error in locationList:', error);
      }
    );
  }

  getClassifications() {
    this.apiService.getClassifications().subscribe(
      (data) => {
        this.classificationList = data;
      },
      (error) => {
        console.error('API error in classificationList:', error);
      }
    );
  }

  getSubclasses() {
    this.apiService.getSubclasses().subscribe(
      (data) => {
        this.subclassList = data;
      },
      (error) => {
        console.error('API error in subclassList:', error);
      }
    );
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.addEntryForm = new FormGroup({
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
    if (this.addEntryForm.valid) {
      this.apiService.sendSkatingLogEntry(this.addEntryForm.value).subscribe(response => {
        console.log('Skating log entry submitted successfully', response);
        // Handle success, e.g., display a message or redirect
      }, error => {
        console.error('Error submitting skating log entry', error);
        // Handle error, e.g., display an error message
      });
    }
  }

  testLists() {
    console.log("locationList: ", this.locationList);
    console.log("clasificationList: ", this.classificationList);
    console.log("subclassList: ", this.subclassList);
  }
}
