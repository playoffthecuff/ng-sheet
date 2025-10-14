import type { User } from '@angular/fire/auth';
import { first, Observable, of, pipe, switchMap } from 'rxjs';

export const withUser = <T>(f: (u: User) => Observable<T>) =>
	pipe(
		first<User | null>(),
		switchMap((u) => (u ? f(u) : of(null))),
	);
