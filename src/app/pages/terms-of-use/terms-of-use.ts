import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout/layout-service';

@Component({
	selector: 'app-terms-of-use',
	imports: [],
	templateUrl: './terms-of-use.html',
	styleUrl: './terms-of-use.less',
})
export class TermsOfUse {
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.headerVariant = 'default';
		this.ls.footerVariant = 'about';
	}
}
