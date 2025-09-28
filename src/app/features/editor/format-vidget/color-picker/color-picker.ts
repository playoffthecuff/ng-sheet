import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	input,
	output,
} from '@angular/core';
import { TuiButton, TuiDropdown, TuiHint, TuiIcon } from '@taiga-ui/core';

export type ColorTarget = 'text' | 'field';

export interface IData {
	icon: string;
	hint: string;
	context: ColorTarget;
}

export interface IOutputData {
	color: string;
	context: ColorTarget;
}

@Component({
	selector: 'app-color-picker',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TuiButton, TuiDropdown, TuiHint, TuiIcon, CommonModule],
	templateUrl: './color-picker.html',
	styleUrl: './color-picker.less',
})
export class ColorPicker {
	public data = input<IData>();
	public colorChange = output<IOutputData>();

	public colors: string[][] = [
		[
			'#1a1a1a',
			'#330000',
			'#331a00',
			'#333300',
			'#003300',
			'#003333',
			'#000033',
			'#1a0033',
			'#330033',
			'#33001a',
			'#000000',
		],
		[
			'#333333',
			'#660000',
			'#663300',
			'#666600',
			'#006600',
			'#006666',
			'#000066',
			'#330066',
			'#660066',
			'#660033',
			'#1a1a1a',
		],
		[
			'#4d4d4d',
			'#990000',
			'#994d00',
			'#999900',
			'#009900',
			'#009999',
			'#000099',
			'#4d0099',
			'#990099',
			'#99004d',
			'#333333',
		],
		[
			'#666666',
			'#cc0000',
			'#cc6600',
			'#cccc00',
			'#00cc00',
			'#00cccc',
			'#0000cc',
			'#6600cc',
			'#cc00cc',
			'#cc0066',
			'#4d4d4d',
		],
		[
			'#999999',
			'#ff0000',
			'#ff8000',
			'#ffff00',
			'#00ff00',
			'#00ffff',
			'#0000ff',
			'#8000ff',
			'#ff00ff',
			'#ff0099',
			'#666666',
		],
		[
			'#cccccc',
			'#ff3333',
			'#ff9933',
			'#ffff66',
			'#66ff66',
			'#66ffff',
			'#3333ff',
			'#9933ff',
			'#ff66ff',
			'#ff66cc',
			'#999999',
		],
		[
			'#ffffff',
			'#ff6666',
			'#ffb366',
			'#ffff99',
			'#99ff99',
			'#99ffff',
			'#6666ff',
			'#b366ff',
			'#ff99ff',
			'#ff99cc',
			'#cccccc',
		],
	];

	updateColor(color: string): void {
		const context = this.data()?.context;

		if (!context) return;

		this.colorChange.emit({ color, context });
	}
}
