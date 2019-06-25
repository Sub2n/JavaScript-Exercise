import {
  Directive, ElementRef, Renderer2, Input, HostListener
} from '@angular/core';

@Directive({
  selector: '[textColor]'
  })
export class TextColorDirective {
  @Input() color: string;

  constructor(public el: ElementRef, public renderer: Renderer2) {}

  @HostListener('mouseenter') onMouse() {
    this.setColor(this.color);
  }

  @HostListener('mouseleave') offMouse() {
    this.setColor(null);
  }

  setColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
