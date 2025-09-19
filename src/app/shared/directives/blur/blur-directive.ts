import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({ selector: '[appBlur]' })
export class BlurDirective {
	private readonly el = inject(ElementRef);
	isActive = input(false, { alias: 'appBlur' });

	constructor() {
		effect(() => {
			if (this.isActive()) this.el.nativeElement.blur();
		});
	}
}
