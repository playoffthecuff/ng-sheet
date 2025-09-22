import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({ selector: '[appScrollIntoView]' })
export class ScrollIntoViewDirective {
	private readonly el = inject(ElementRef);
	isActive = input(false, { alias: 'appScrollIntoView' });

	constructor() {
		effect(() => {
			if (this.isActive()) this.el.nativeElement.scrollIntoViewIfNeeded();
		});
	}
}
