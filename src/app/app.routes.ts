import type { Routes } from '@angular/router';
import { docResolver } from './features/editor/sheets-service/sheets-service';

export const routes: Routes = [
	{
		title: 'Ng Sheet',
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./pages/main/main').then((m) => m.Main),
	},
	{
		title: 'Login - Ng Sheet',
		path: 'login',
		loadComponent: () => import('./pages/signin/signin').then((m) => m.Signin),
	},
	{
		title: 'Registration - Ng Sheet',
		path: 'register',
		loadComponent: () => import('./pages/signup/signup').then((m) => m.Signup),
	},
	{
		title: 'Editor - Ng Sheet',
		path: 'editor/:docId/:sheetId',
		loadComponent: () => import('./features/editor/editor').then((m) => m.Editor),
		resolve: { doc: docResolver },
	},
	{
		title: 'Terms Of Use - Ng Sheet',
		path: 'terms-of-use',
		loadComponent: () =>
			import('./pages/terms-of-use/terms-of-use').then((m) => m.TermsOfUse),
	},
	{
		title: 'Error - Ng Sheet',
		path: 'error',
		loadComponent: () => import('./pages/error/error').then((m) => m.Error),
	},
	{
		title: 'Nothing Found - Ng Sheet',
		path: '**',
		loadComponent: () =>
			import('./pages/not-found/not-found').then((m) => m.NotFound),
	},
];
