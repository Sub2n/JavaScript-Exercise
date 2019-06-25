import {
  Directive, HostListener, ElementRef, Renderer2
} from '@angular/core';

@Directive({
  selector: '[show-scroll]'
  })
export class ShowScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll') onScroll() {
    console.log(window.pageYOffset);

    if (window.pageYOffset >= 100) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    } else this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }

  @HostListener('click') onClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
