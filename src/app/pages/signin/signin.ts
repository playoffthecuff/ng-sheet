import { Component, inject } from '@angular/core';
import { LoginForm } from '../../features/login-form/login-form';
import { LayoutService } from '../../core/services/layout/layout-service';

@Component({
	selector: 'app-signin',
	imports: [LoginForm],
	templateUrl: './signin.html',
	styleUrl: './signin.less',
})
export class Signin {
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.headerVariant = 'search';
	}
}
