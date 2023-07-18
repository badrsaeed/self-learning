import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  @Input() highlighter!: string;
  constructor(private el: ElementRef, private render: Renderer2) {
    // this.el.nativeElement.style.backgroundColor = 'green';
    // this.render.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
  highlieght(color: string) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
  @HostListener('mouseover') onMouseOver() {
    this.highlieght(this.highlighter || 'red');
  }
  @HostListener('mouseleave') onMouseLeave(color: string) {
    this.highlieght('green');
  }
}
