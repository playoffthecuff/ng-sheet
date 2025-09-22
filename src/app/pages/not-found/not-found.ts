import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { LayoutService } from '../../core/services/layout/layout-service';

@Component({
	selector: 'app-not-found',
	imports: [TuiButton, RouterLink, TuiTitle],
	templateUrl: './not-found.html',
	styleUrl: './not-found.less',
})
export class NotFound {
	private readonly location = inject(Location);
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.headerVariant = 'search';
	}
	protected goBack() {
		this.location.back();
	}
}
