import { Injectable } from '@angular/core';
import { PreloadingStrategy, type Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
	preload(route: Route, load: () => Observable<null>): Observable<null> {
		if (route.data?.['preload']) {
			return load();
		}
		return of(null);
	}
}
