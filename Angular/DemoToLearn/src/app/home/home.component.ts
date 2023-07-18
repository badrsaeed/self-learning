import { Component } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private apiService: ApiService) {}

  getData() {
    this.apiService.get().subscribe((data) => {
      console.log(data);
    });
  }
}
