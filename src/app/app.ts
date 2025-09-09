import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core/components';
import { Footer } from './widgets/footer/footer';
import { Header } from './widgets/header/header';
import { FooterEditor } from './widgets/footer/editor/footer-editor';
import { FooterAbout } from './widgets/footer/about/footer-about';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, TuiRoot, Header, Footer, FooterEditor, FooterAbout],
	templateUrl: './app.html',
	styleUrl: './app.less',
})
export class App {
	protected readonly title = signal('ng-sheet');
}
