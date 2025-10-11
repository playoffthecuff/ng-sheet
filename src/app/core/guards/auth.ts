import { inject } from '@angular/core';
import { RedirectCommand, Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth-service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
	const as = inject(AuthService);
	const r = inject(Router);
	const user = await firstValueFrom(as.user$);
	return !!user || new RedirectCommand(r.parseUrl('/login'));
};
