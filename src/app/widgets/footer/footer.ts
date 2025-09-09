import { Component, SkipSelf } from '@angular/core';
import { type TuiStringHandler } from '@taiga-ui/cdk';
import { TUI_ICON_RESOLVER } from '@taiga-ui/core';
@Component({
	selector: 'app-footer',
	imports: [],
	templateUrl: './footer.html',
	styleUrl: './footer.less',
	providers: [
		{
			provide: TUI_ICON_RESOLVER,
			deps: [[new SkipSelf(), TUI_ICON_RESOLVER]],
			useFactory(defaultResolver: TuiStringHandler<string>) {
				return (name: string) =>
					name.startsWith('@tui.') ?
						defaultResolver(name)
					:	`/assets/img/${name}.svg`;
			},
		},
	],
})
export class Footer {}
