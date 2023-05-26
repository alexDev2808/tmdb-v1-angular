import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = '#DF2E38';
  }

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = '#03C988';
    this.element.nativeElement.style.border = 'none';
  }

}
