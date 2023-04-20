import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-entries',
  templateUrl: './view-entries.component.html',
  styleUrls: ['./view-entries.component.scss']
})
export class ViewEntriesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getExample().subscribe(
      (data) => {
        console.log('API response:', data);
      },
      (error) => {
        console.error('API error:', error);
      }
    );
  }
}
