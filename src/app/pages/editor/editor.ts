import { Component } from '@angular/core';
import { Footer } from '../../widgets/footer/footer';
import { FooterAbout } from '../../widgets/footer/about/footer-about';

@Component({
	selector: 'app-editor',
	imports: [Footer, FooterAbout],
	templateUrl: './editor.html',
	styleUrl: './editor.less',
})
export class Editor {}
