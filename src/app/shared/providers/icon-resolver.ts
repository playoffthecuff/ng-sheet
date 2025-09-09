import { SkipSelf, type Provider } from '@angular/core';
import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import { TUI_ICON_RESOLVER } from '@taiga-ui/core';

export const CUSTOM_ICON_RESOLVER_PROVIDER: Provider = {
	provide: TUI_ICON_RESOLVER,
	deps: [[new SkipSelf(), TUI_ICON_RESOLVER]],
	useFactory(defaultResolver: TuiStringHandler<string>) {
		return (name: string) =>
			name.startsWith('@tui.') ? defaultResolver(name) : `/assets/img/${name}.svg`;
	},
};
