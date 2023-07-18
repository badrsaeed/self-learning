import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]',
})
export class ChangeStyleDirective {
  colors: string[] = ['red', 'green', 'yellow', 'black'];
  @HostBinding('style.color') textColor!: string;
  @HostBinding('style.borderColor') borderColor!: string;
  @HostListener('keydown') onKeyDown() {
    let textIndex = Math.floor(Math.random() * this.colors.length);
    let borderIndex = Math.floor(Math.random() * this.colors.length);
    this.textColor = this.colors[textIndex];
    this.textColor = this.colors[borderIndex];
  }
  constructor() {}
}
