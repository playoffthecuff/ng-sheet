import { Component } from '@angular/core';
import { RegisterForm } from '../../features/register-form/register-form';

@Component({
	selector: 'app-signup',
	imports: [RegisterForm],
	templateUrl: './signup.html',
	styleUrl: './signup.less',
})
export class Signup {}
