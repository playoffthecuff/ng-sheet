import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiTitle } from '@taiga-ui/core';

@Component({
	selector: 'app-error',
	imports: [TuiButton, RouterLink, TuiTitle],
	templateUrl: './error.html',
	styleUrl: './error.less',
})
export class Error {
	private readonly location = inject(Location);
	protected goBack() {
		this.location.back();
	}
}
