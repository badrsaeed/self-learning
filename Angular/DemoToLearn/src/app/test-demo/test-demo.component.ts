import { Component } from '@angular/core';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.css']
})
export class TestDemoComponent {
  public name!:string
  /**
   *
   */
  constructor() {
    this.name = "Badr";
  }
}
