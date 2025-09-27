import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TuiButton, TuiHint, TuiIcon } from '@taiga-ui/core';

export interface IData {
	icon: string;
	hint: string;
}

@Component({
	selector: 'app-color-text',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TuiButton, TuiIcon, TuiHint],
	templateUrl: './color-text.html',
	styleUrl: './color-text.less',
})
export class ColorText {
	public data: IData = { icon: '@tui.baseline', hint: 'Цвет текста' };

	protected readonly control = new FormControl();
}
