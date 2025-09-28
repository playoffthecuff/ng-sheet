import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core/components';
import { LayoutService } from './core/services/layout/layout-service';
import { ThemeService } from './core/services/theme/theme-service';
import { CellInput } from './features/editor/cell-input/cell-input';
import { Heading } from './shared/ui/heading/heading';
import { FooterAbout } from './widgets/footer/about/footer-about';
import { FooterEditor } from './widgets/footer/editor/footer-editor';
import { Footer } from './widgets/footer/footer';
import { HeaderEditor } from './widgets/header/editor/header-editor/header-editor';
import { Header } from './widgets/header/header';
import { HeaderSearch } from './widgets/header/search/header-search/header-search';
import { ProgressBar } from './shared/ui/progress-bar';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		TuiRoot,
		Header,
		Footer,
		FooterEditor,
		FooterAbout,
		CellInput,
		HeaderEditor,
		HeaderSearch,
		Heading,
		ProgressBar,
	],
	templateUrl: './app.html',
	styleUrl: './app.less',
})
export class App {
	protected readonly ls = inject(LayoutService);
	protected readonly ts = inject(ThemeService);
	// protected readonly user$ = inject(AuthService).user$;
}
