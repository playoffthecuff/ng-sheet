import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout/layout-service';
import { RegisterForm } from '../../features/register-form/register-form';

@Component({
	selector: 'app-signup',
	imports: [RegisterForm],
	templateUrl: './signup.html',
	styleUrl: './signup.less',
})
export class Signup {
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.headerVariant = 'default';
		this.ls.footerVariant = 'about';
	}
}
