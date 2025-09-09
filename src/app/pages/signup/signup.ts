import { Component } from '@angular/core';
import { RegisterForm } from '../../features/register-form/register-form';
import { Footer } from '../../widgets/footer/footer';
import { FooterAbout } from '../../widgets/footer/about/footer-about';

@Component({
	selector: 'app-signup',
	imports: [RegisterForm, Footer, FooterAbout],
	templateUrl: './signup.html',
	styleUrl: './signup.less',
})
export class Signup {}
