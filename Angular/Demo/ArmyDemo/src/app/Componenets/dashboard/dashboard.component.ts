import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public image!:string;
  public placeholder:string;
  constructor(){
    setTimeout(() => {
      this.image = 'https://i.pravatar.cc/500?img=7';
    }, 4000);
    this.placeholder = 'http://via.placeholder.com/150';
  }
}
