// scroll-to.directive.ts
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libScrollTo]',
})
export class ScrollToDirective {
  @Input('libScrollTo') targetId!: string;

  @HostListener('click')
  onClick(): void {
    if (!this.targetId) return;
    const el = document.getElementById(this.targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
