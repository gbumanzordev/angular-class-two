import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.fontWeight = 'normal';
  }

  constructor(private element: ElementRef) {
    this.element = element;
    element.nativeElement.style.backgroundColor = '#f6da98';
  }
}
