import * as E from 'fp-ts/Either';

import {
	catchError,
	map,
	Observable,
	of,
	throwError,
	type OperatorFunction,
} from 'rxjs';

export function withEither<K, T extends Error>(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errClass: new (...args: any[]) => T,
): OperatorFunction<K, E.Either<T, K>> {
	return (source: Observable<K>) =>
		source.pipe(
			map(E.right),
			catchError((e) => {
				if (e instanceof errClass) return of(E.left(e));
				return throwError(() => e);
			}),
		);
}
