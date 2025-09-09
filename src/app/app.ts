import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core/components';
import { LayoutService } from './core/services/layout/layout-service';
import { ThemeService } from './core/services/theme/theme-service';
import { FooterAbout } from './widgets/footer/about/footer-about';
import { FooterEditor } from './widgets/footer/editor/footer-editor';
import { Footer } from './widgets/footer/footer';
import { Header } from './widgets/header/header';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TuiRoot, Header, Footer, FooterEditor, FooterAbout],
	templateUrl: './app.html',
	styleUrl: './app.less',
})
export class App {
	protected readonly ls = inject(LayoutService);
	protected readonly ts = inject(ThemeService);
	protected readonly title = signal('ng-sheet');
}
