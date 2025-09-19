import { Component } from '@angular/core';
import { LoginForm } from '../../features/login-form/login-form';

@Component({
	selector: 'app-signin',
	imports: [LoginForm],
	templateUrl: './signin.html',
	styleUrl: './signin.less',
})
export class Signin {}
