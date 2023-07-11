import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IEntryView } from '../../interfaces/iSkatingInterfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-view-entries',
  templateUrl: './view-entries.component.html',
  styleUrls: ['./view-entries.component.scss']
})
export class ViewEntriesComponent implements OnInit {

  entryData: IEntryView[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEntries().subscribe(
      (data) => {
        console.log('API response:', data);
        this.entryData = data;
      },
      (error) => {
        console.error('API error:', error);
      }
    );
  }
}
