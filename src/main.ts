/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

const locale = window.location.pathname.split('/')[1];
if (locale === 'en') localStorage.setItem('tuiLanguage', 'english');
if (locale === 'es') localStorage.setItem('tuiLanguage', 'spanish');

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
