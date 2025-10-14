import { finalize, Observable, type OperatorFunction } from 'rxjs';

export function withLoading<T>(
	setLoading: (value: boolean) => void,
): OperatorFunction<T, T> {
	return (source: Observable<T>) =>
		new Observable<T>((subscriber) => {
			setLoading(true);
			const subscription = source
				.pipe(finalize(() => setLoading(false)))
				.subscribe(subscriber);
			return subscription;
		});
}
