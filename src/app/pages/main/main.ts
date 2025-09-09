import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../core/services/layout/layout-service';
import { Intro } from '../../shared/ui/intro/intro';

@Component({
	selector: 'app-main',
	imports: [Intro, RouterLink],
	templateUrl: './main.html',
	styleUrl: './main.less',
})
export class Main {
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.footerVariant = 'about';
	}
}
