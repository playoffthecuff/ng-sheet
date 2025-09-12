import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({ selector: '[appInvertHighlight]' })
export class InvertHighlightDirective {
	private readonly el = inject(ElementRef);
	isActive = input(false, { alias: 'appInvertHighlight' });
	constructor() {
		effect(
			() => (
				(this.el.nativeElement.style.backgroundColor =
					this.isActive() ? 'var(--tui-background-accent-1)' : ''),
				(this.el.nativeElement.style.color =
					this.isActive() ? 'var(--tui-background-base)' : ''),
				(this.el.nativeElement.style.borderColor =
					this.isActive() ? 'var(--tui-background-base)' : '')
			),
		);
	}
}
