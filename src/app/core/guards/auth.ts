import { inject } from '@angular/core';
import { RedirectCommand, Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth-service';

export const authGuard: CanActivateFn = () => {
	const as = inject(AuthService);
	const r = inject(Router);
	const cut = r.parseUrl('/login');
	return !!as.userSignal() || new RedirectCommand(cut);
};
