import { Injectable } from '@angular/core';
import type { IOutputData } from '../../color-picker/color-picker';

@Injectable()
export class MenuIconsService {
	public updateColorPicker($event: IOutputData) {
		const { color, context } = $event;

		if (context === 'text') {
			console.log(context, color);
			// change color text
		} else {
			// change color field
			console.log(context, color);
		}
	}
}
