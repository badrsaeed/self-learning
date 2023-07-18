import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomColors]',
})
export class RandomColorsDirective {
  colorList: string[] = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Purple',
    'Pink',
    'Indigo',
  ];

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border') borderColor!: string;
  @HostListener('keyup') keyUp() {
    const colorIndex = Math.floor(Math.random() * this.colorList.length);
    this.color = this.colorList[colorIndex];
    this.borderColor = `4px solid ${this.colorList[colorIndex]}`;
  }
  constructor() {}
}
