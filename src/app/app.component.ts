import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SkatingLogWeb';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
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
