import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
	TuiButton,
	TuiError,
	TuiIcon,
	TuiLabel,
	TuiLink,
	TuiLoader,
	TuiTextfield,
	TuiTextfieldDirective,
} from '@taiga-ui/core/components';
import { TuiTitle } from '@taiga-ui/core/directives/title';
import { TuiPassword } from '@taiga-ui/kit/directives/password';

import { NgOptimizedImage } from '@angular/common';
import { FirebaseError } from '@angular/fire/app';
import type { User } from '@angular/fire/auth';
import { TuiProgress } from '@taiga-ui/kit';
import * as E from 'fp-ts/Either';
import { type Observable } from 'rxjs';
import {
	AuthService,
	type AuthProvider,
} from '../../core/services/auth/auth-service';
import { AUTH } from '../../shared/constants/auth';
import { PLACEHOLDERS } from '../../shared/constants/image-placeholders';
import { CUSTOM_ICON_RESOLVER_PROVIDER } from '../../shared/providers/icon-resolver';
import { Divider } from '../../shared/ui/divider/divider';
import { Spinner } from '../../shared/ui/spinner/spinner';
import { calcPasswordStrength } from '../../shared/utils/calc-password-strength';
import { getControlErrorMessage } from '../../shared/utils/get-control-error-message';
import { withEither } from '../../shared/utils/with-either';
import { withLoading } from '../../shared/utils/with-loading';
import { FileManagerService } from '../file-manager/service/file-manager-service';

@Component({
	selector: 'app-login-form',
	imports: [
		ReactiveFormsModule,
		TuiTitle,
		TuiLabel,
		TuiTextfieldDirective,
		TuiTextfield,
		TuiIcon,
		TuiError,
		Spinner,
		RouterLink,
		TuiButton,
		TuiPassword,
		TuiLink,
		TuiProgress,
		TuiIcon,
		NgOptimizedImage,
		Divider,
		TuiLoader,
	],
	templateUrl: './login-form.html',
	styleUrl: './login-form.less',
	providers: [CUSTOM_ICON_RESOLVER_PROVIDER],
})
export class LoginForm {
	private readonly fb = inject(FormBuilder);
	private readonly as = inject(AuthService);
	private readonly r = inject(Router);
	private readonly fms = inject(FileManagerService);

	protected readonly isLoading = signal(false);
	protected readonly isGlobalLoading = signal(false);

	protected readonly loadingErrorMessage = signal<string | null>(null);

	protected readonly AUTH_PLACEHOLDER = PLACEHOLDERS.AUTH;

	protected get passwordStrength() {
		return calcPasswordStrength(this.form.get('password')?.value ?? '');
	}

	form = this.fb.nonNullable.group({
		email: [
			'',
			[Validators.required, Validators.pattern(AUTH.FIREBASE_EMAIL_REGEX)],
		],
		password: ['', Validators.required],
	});

	private login(o: Observable<User>, withGlobalLoader = false) {
		o.pipe(
			withLoading(
				withGlobalLoader ? this.isGlobalLoading.set : this.isLoading.set,
			),
			withEither(FirebaseError),
		).subscribe(
			E.match(
				(e) => this.loadingErrorMessage.set(e.message),
				() => {
					this.fms.loadPage();
					this.fms.loadTemplates();
					void this.r.navigateByUrl('/');
				},
			),
		);
	}

	protected submit() {
		const { email, password } = this.form.getRawValue();
		this.login(this.as.login(email, password));
	}

	protected get emailValidationMessage() {
		return getControlErrorMessage(this.form.get('email'), [
			{ name: 'required', message: $localize`Required` },
			{ name: 'pattern', message: $localize`Invalid Email` },
		]);
	}
	protected get passwordValidationMessage() {
		return getControlErrorMessage(this.form.get('password'));
	}

	protected signinWithProvider(p: AuthProvider) {
		this.login(this.as.loginWithOAuth(p), true);
	}
}
