import { Component, inject, signal } from '@angular/core';
import {
	FormBuilder,
	ReactiveFormsModule,
	Validators,
	type ValidatorFn,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
	TuiButton,
	TuiError,
	TuiIcon,
	TuiLabel,
	TuiLink,
	TuiTextfield,
	TuiTextfieldDirective,
} from '@taiga-ui/core/components';
import { TuiTitle } from '@taiga-ui/core/directives/title';
import { TuiPassword } from '@taiga-ui/kit/directives/password';

import { NgOptimizedImage } from '@angular/common';
import { FirebaseError } from '@angular/fire/app';
import { TuiButtonLoading, TuiProgress, TuiTooltip } from '@taiga-ui/kit';
import * as E from 'fp-ts/Either';
import { AuthService } from '../../core/services/auth/auth-service';
import { AUTH } from '../../shared/constants/auth';
import { ProgressToColorPipe } from '../../shared/pipes/progress-to-color/progress-to-color-pipe';
import { calcPasswordStrength } from '../../shared/utils/calc-password-strength';
import { getControlErrorMessage } from '../../shared/utils/get-control-error-message';
import { withEither } from '../../shared/utils/with-either';
import { withLoading } from '../../shared/utils/with-loading';
import { PLACEHOLDERS } from '../../shared/constants/image-placeholders';
import { Divider } from '../../shared/ui/divider/divider';

const validatePasswordStrength: ValidatorFn = (c) =>
	calcPasswordStrength(c.value) > 75 ? null : { strength: 'Weak Password' };

@Component({
	selector: 'app-register-form',
	imports: [
		ReactiveFormsModule,
		TuiTitle,
		TuiLabel,
		TuiTextfieldDirective,
		TuiTextfield,
		TuiIcon,
		TuiError,
		TuiButtonLoading,
		RouterLink,
		TuiButton,
		TuiPassword,
		TuiLink,
		TuiProgress,
		ProgressToColorPipe,
		TuiIcon,
		TuiTooltip,
		NgOptimizedImage,
		Divider,
	],
	templateUrl: './register-form.html',
	styleUrl: './register-form.less',
})
export class RegisterForm {
	private readonly fb = inject(FormBuilder);
	private readonly as = inject(AuthService);
	private readonly r = inject(Router);

	protected readonly CONTACT_PLACEHOLDER = PLACEHOLDERS.CONTACT;

	protected readonly isLoading = signal(false);
	protected readonly loadingErrorMessage = signal<Error['message'] | null>(null);

	protected get passwordStrength() {
		return calcPasswordStrength(this.form.get('password')?.value ?? '');
	}

	form = this.fb.nonNullable.group({
		email: [
			'',
			[Validators.required, Validators.pattern(AUTH.FIREBASE_EMAIL_REGEX)],
		],
		name: [
			'',
			[Validators.required, Validators.minLength(2), Validators.maxLength(30)],
		],
		password: ['', validatePasswordStrength],
	});

	protected submit() {
		const { email, name, password } = this.form.getRawValue();
		this.as
			.register(email, name, password)
			.pipe(withLoading(this.isLoading.set), withEither(FirebaseError))
			.subscribe(
				E.match(
					(e) => this.loadingErrorMessage.set(e.message),
					() => void this.r.navigateByUrl('/'),
				),
			);
	}

	protected get emailValidationMessage() {
		return getControlErrorMessage(this.form.get('email'), [
			{ name: 'required', message: 'Required' },
			{ name: 'pattern', message: 'Invalid Email' },
		]);
	}
	protected get passwordValidationMessage() {
		return getControlErrorMessage(this.form.get('password'));
	}
	protected get nameValidationMessage() {
		return getControlErrorMessage(this.form.get('name'), [
			{ name: 'required', message: 'Required' },
			{ name: 'minlength', message: 'Minimum 2 characters' },
			{ name: 'maxlength', message: 'Maximum 30 characters' },
		]);
	}
}
