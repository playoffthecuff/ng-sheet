import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon, tuiIconResolverProvider } from '@taiga-ui/core';

@Component({
	imports: [TuiIcon],
	selector: 'app-logo',
	templateUrl: 'logo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		tuiIconResolverProvider((icon) =>
			icon.includes('/') ? icon : `/assets/icons/${icon}.svg`,
		),
	],
})
export class Logo {
	protected readonly icon = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 32H4C1.79086 32 0 30.2091 0 28V14H10V32ZM32 28C32 30.2091 30.2091 32 28 32H14V14H32V28ZM10 0V10H0V4C0 1.79086 1.79086 0 4 0H10ZM28 0C30.2091 0 32 1.79086 32 4V10H14V0H28Z" fill="currentColor"/></svg>`)}`;
}
