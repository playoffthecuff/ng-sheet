import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TuiLink, TuiRoot } from '@taiga-ui/core/components';
import { AuthService } from './core/services/auth/auth-service';
import { LayoutService } from './core/services/layout/layout-service';
import { ThemeService } from './core/services/theme/theme-service';
import { CellInput } from './features/editor/cell-input/cell-input';
import { Heading } from './shared/ui/heading/heading';
import { ProgressBar } from './shared/ui/progress-bar';
import { FooterAbout } from './widgets/footer/about/footer-about';
import { FooterEditor } from './widgets/footer/editor/footer-editor';
import { Footer } from './widgets/footer/footer';
import { HeaderEditor } from './widgets/header/editor/header-editor/header-editor';
import { Header } from './widgets/header/header';
import { HeaderSearch } from './widgets/header/search/header-search/header-search';

@Component({
	selector: 'app-root',
	imports: [
		AsyncPipe,
		CellInput,
		Footer,
		FooterEditor,
		FooterAbout,
		Header,
		HeaderEditor,
		HeaderSearch,
		Heading,
		ProgressBar,
		RouterLink,
		RouterOutlet,
		TuiLink,
		TuiRoot,
	],
	templateUrl: './app.html',
	styleUrl: './app.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	private readonly as = inject(AuthService);
	protected readonly ls = inject(LayoutService);
	protected readonly ts = inject(ThemeService);
	protected readonly user$ = this.as.user$;
}
