import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AddEntryComponent } from './add-record/add-entry.component';
import { ViewEntriesComponent } from './view-records/view-entries.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
