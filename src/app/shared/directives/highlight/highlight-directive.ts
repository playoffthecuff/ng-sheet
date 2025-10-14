import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
	private readonly el = inject(ElementRef);
	isActive = input(false, { alias: 'appHighlight' });
	color = input('var(--tui-chart-categorical-02)');
	constructor() {
		effect(
			() =>
				(this.el.nativeElement.style.backgroundColor =
					this.isActive() ? this.color() : ''),
		);
	}
}
