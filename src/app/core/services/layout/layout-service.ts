import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
	headerVariant: 'search' | 'editor' | 'default' = 'search';
	footerVariant: 'about' | 'editor' = 'about';
}
