import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({ selector: '[appSetFocus]' })
export class SetFocusDirective {
	private readonly el = inject(ElementRef);
	isActive = input(false, { alias: 'appSetFocus' });

	constructor() {
		effect(() => {
			if (this.isActive()) this.el.nativeElement.focus();
		});
	}
}
