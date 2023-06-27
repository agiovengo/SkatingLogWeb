import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ILevelState, IListContainer, ILocation, } from '../interfaces/iSkatingInterfaces';
import { ApiService } from '../services/api.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  addEntryForm!: FormGroup;
  levelStateList: ILevelState[] = [];
  recordTypeList: KeyValue<number, string>[] = [];
  locationList: KeyValue<number, string>[] = [];

  constructor(private apiService: ApiService) {
    this.getListContainer();
  }

  getListContainer() {
    this.apiService.getListContainer().subscribe(
      (data: IListContainer) => {
        this.levelStateList = data.levelStates;
        this.recordTypeList = data.recordTypes.map(x => ({key: x.id, value: x.description}));
        this.locationList = data.locations.map(x => ({key: x.id, value: x.description}));
      },
      (error) => {
        console.error('API error in locationList:', error);
      }
    );
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.addEntryForm = new FormGroup({
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
    console.log("clasificationList: ", this.levelStateList);
    console.log("subclassList: ", this.recordTypeList);
  }
}
