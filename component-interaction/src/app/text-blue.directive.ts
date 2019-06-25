import {
  Directive, ElementRef, Renderer2, HostListener
} from '@angular/core';

@Directive({
  selector: '[textBlue]'
  })
export class TextBlueDirective {
  constructor(public el: ElementRef, public renderer: Renderer2) {}

  @HostListener('mouseenter') onMouse() {
    this.setColor('blue');
  }

  @HostListener('mouseleave') offMouse() {
    this.setColor(null);
  }

  setColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
