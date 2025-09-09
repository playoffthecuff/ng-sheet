import { EMPTY, Observable, type OperatorFunction } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function withUnhandledCatch<T, E = unknown>(
	onError: (err: E) => void,
): OperatorFunction<T, T> {
	return (source: Observable<T>) =>
		source.pipe(
			catchError((err: E) => {
				onError(err);
				return EMPTY;
			}),
		);
}
