import { Component } from '@angular/core';
import { LoginForm } from '../../features/login-form/login-form';
import { Footer } from '../../widgets/footer/footer';
import { FooterAbout } from '../../widgets/footer/about/footer-about';

@Component({
	selector: 'app-signin',
	imports: [LoginForm, Footer, FooterAbout],
	templateUrl: './signin.html',
	styleUrl: './signin.less',
})
export class Signin {}
