import { Directive, ElementRef, HostListener, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
  standalone: true
})
export class HoverStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeStyle('scale(1.03)', '#8000ff', '0 10px 20px rgba(128, 0, 255, 0.2)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeStyle('scale(1)', null, 'none');
  }

  private changeStyle(transform: string, borderColor: string | null, shadow: string) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-out');

    if (borderColor) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'border-color',
        borderColor,
        RendererStyleFlags2.Important
      );
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border-color');
    }

    if (shadow !== 'none') {
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadow);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    }
  }
}
