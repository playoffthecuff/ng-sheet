import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { LayoutService } from '../../core/services/layout/layout-service';

@Component({
	selector: 'app-error',
	imports: [TuiButton, RouterLink, TuiTitle],
	templateUrl: './error.html',
	styleUrl: './error.less',
})
export class Error {
	private readonly location = inject(Location);
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.headerVariant = 'default';
		this.ls.footerVariant = 'about';
	}
	protected get canGoBack() {
		return history.length > 1;
	}
	protected goBack() {
		this.location.back();
	}
}
