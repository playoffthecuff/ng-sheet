import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout/layout-service';
import { LoginForm } from '../../features/login-form/login-form';

@Component({
	selector: 'app-signin',
	imports: [LoginForm],
	templateUrl: './signin.html',
	styleUrl: './signin.less',
})
export class Signin {
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.headerVariant = 'default';
		this.ls.footerVariant = 'about';
	}
}
