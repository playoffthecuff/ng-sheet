import type { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth';
import { unsavedTableGuard } from './core/guards/unsaved-table';
import { docResolver } from './features/editor/sheets-service/doc-resolver';

export const routes: Routes = [
	{
		title: 'Ng Sheet',
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./pages/main/main').then((m) => m.Main),
		data: { preload: false },
	},
	{
		title: 'Login - Ng Sheet',
		path: 'login',
		loadComponent: () => import('./pages/signin/signin').then((m) => m.Signin),
		data: { preload: false },
	},
	{
		title: 'Registration - Ng Sheet',
		path: 'register',
		loadComponent: () => import('./pages/signup/signup').then((m) => m.Signup),
		data: { preload: false },
	},
	{
		title: 'Editor - Ng Sheet',
		path: 'editor/:docId',
		loadComponent: () => import('./features/editor/editor').then((m) => m.Editor),
		resolve: { doc: docResolver },
		canActivate: [authGuard],
		canDeactivate: [unsavedTableGuard],
		data: { preload: false },
	},
	{
		title: 'Editor - Ng Sheet',
		path: 'editor/:docId/:sheetId',
		loadComponent: () => import('./features/editor/editor').then((m) => m.Editor),
		resolve: { doc: docResolver },
		canActivate: [authGuard],
		canDeactivate: [unsavedTableGuard],
		data: { preload: true },
	},
	{
		title: 'Terms Of Use - Ng Sheet',
		path: 'terms-of-use',
		loadComponent: () =>
			import('./pages/terms-of-use/terms-of-use').then((m) => m.TermsOfUse),
		data: { preload: false },
	},
	{
		title: 'Getting Started - Ng Sheet',
		path: 'getting-started',
		loadComponent: () =>
			import('./pages/getting-started/getting-started').then(
				(m) => m.GettingStarted,
			),
		data: { preload: false },
	},
	{
		title: 'Error - Ng Sheet',
		path: 'error',
		loadComponent: () => import('./pages/error/error').then((m) => m.Error),
		data: { preload: false },
	},
	{
		path: 'trash-test',
		loadComponent: () =>
			import('./features/trash-test/trash-test').then((m) => m.TrashTest),
		data: { preload: false },
	},
	{
		title: 'Nothing Found - Ng Sheet',
		path: '**',
		loadComponent: () =>
			import('./pages/not-found/not-found').then((m) => m.NotFound),
		data: { preload: false },
	},
];
