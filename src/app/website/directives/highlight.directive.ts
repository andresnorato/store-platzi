import { Directive, ElementRef, HostListener } from '@angular/core';

//Decorador sirve para que Angular interprete la funcionalidad en especifico
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'red';
  }
}
