import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements AfterViewInit {
  @Input() hColor: string = '';
  overColor: string = 'yellow';
  leaveColor: string = 'orange';
  defaultColor: string = 'blue';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.hColor;
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = this.hColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.leaveColor;
  }
}
