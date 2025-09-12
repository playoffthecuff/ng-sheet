import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({ selector: '[appBorder]' })
export class BorderDirective {
	private readonly el = inject(ElementRef);
	isActive = input(false, { alias: 'appBorder' });
	constructor() {
		effect(
			() =>
				(this.el.nativeElement.style.outline =
					this.isActive() ? '2px solid var(--tui-chart-categorical-00)' : ''),
		);
	}
}
