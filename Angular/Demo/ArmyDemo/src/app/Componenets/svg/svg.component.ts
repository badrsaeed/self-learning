import { Component } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
})
export class SvgComponent {
  rgbColor = 'rgb(255,0,0)';

  changeColor() {
    setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      this.rgbColor = `rgb(${r},${g},${b})`;
    }, 1000);
  }
}
