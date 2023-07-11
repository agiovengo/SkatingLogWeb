import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IAddLogEntry, ILevelState, IListContainer, ILocation, ILogEntry, } from '../../interfaces/iSkatingInterfaces';
import { ApiService } from '../../services/api.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  addEntryForm!: FormGroup;
  currentLevelState!: ILevelState;
  levelStateList: ILevelState[] = [];
  recordTypeList: KeyValue<number, string>[] = [];
  locationList: KeyValue<number, string>[] = [];

  constructor(private apiService: ApiService) {
    
  }

  getListContainer() {
    this.apiService.getListContainer().subscribe(
      (data: IListContainer) => {
        this.levelStateList = data.levelStates;
        this.currentLevelState = data.levelStates[0];
        this.recordTypeList = data.recordTypes.map(x => ({key: x.id, value: x.description}));
        this.locationList = data.locations.map(x => ({key: x.id, value: x.description}));

        this.addEntryForm.patchValue({ freestyleLevel: this.currentLevelState.freestyleLevel });
        this.addEntryForm.patchValue({ danceLevel: this.currentLevelState.danceLevel });

      },
      (error) => {
        console.error('API error in locationList:', error);
      }
    );
  }

  ngOnInit(): void {
    this.createForm();
    this.getListContainer();
  }

  createForm(): void {
    this.addEntryForm = new FormGroup({
      startDateTime: new FormControl('', Validators.required),
      stopDateTime: new FormControl('', Validators.required),
      recordTypeId: new FormControl('', Validators.required),
      locationId: new FormControl('', Validators.required),
      isOffIce: new FormControl(false),
      basicDescription: new FormControl('', Validators.required),
      detailedDescription: new FormControl('', Validators.required),
      freestyleLevel: new FormControl('', Validators.required),
      danceLevel: new FormControl('', Validators.required) 
    });
  }

  onSubmit(): void {
    if (this.addEntryForm.valid) {
      this.apiService.addLogEntry(this.convertFormToILogEntry()).subscribe(response => {
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
    console.log("levelStateList: ", this.levelStateList);
    console.log("recordTypeList: ", this.recordTypeList);
  }

  convertFormToILogEntry(): IAddLogEntry {
    return {
      startDateTime: this.addEntryForm.value.startDateTime,
      stopDateTime: this.addEntryForm.value.stopDateTime,
      recordTypeId: this.addEntryForm.value.recordTypeId,
      locationId: this.addEntryForm.value.locationId,
      basicDescription: this.addEntryForm.value.basicDescription,
      detailedDescription: this.addEntryForm.value.detailedDescription,
      isOnIce: !this.addEntryForm.value.isOffIce,
    };
  }
}
