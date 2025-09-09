import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
	headerVariant: 'search' | 'editor' = 'search';
	footerVariant: 'about' | 'editor' = 'about';
}
