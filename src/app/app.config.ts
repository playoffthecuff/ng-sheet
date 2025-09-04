import {
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
	type ApplicationConfig,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEventPlugins } from '@taiga-ui/event-plugins';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
	TUI_LANGUAGE,
	TUI_SPANISH_LANGUAGE,
	tuiLanguageSwitcher,
	type TuiLanguageName,
} from '@taiga-ui/i18n';
import { of } from 'rxjs';
import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		// provideAnimations(),
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideRouter(routes),
		provideEventPlugins(),
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		{ provide: TUI_LANGUAGE, useValue: of(TUI_SPANISH_LANGUAGE) },
		tuiLanguageSwitcher(async (language: TuiLanguageName): Promise<unknown> => {
			switch (language) {
				case 'spanish':
					return import('@taiga-ui/i18n/languages/spanish');
				default:
					return import('@taiga-ui/i18n/languages/english');
			}
		}),
	],
};
