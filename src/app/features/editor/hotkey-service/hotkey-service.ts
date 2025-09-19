import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HotkeyService {
	actions = ['cellInputFocus'] as const;
	appliedAction: (typeof this.actions)[number] | null = null;
}
