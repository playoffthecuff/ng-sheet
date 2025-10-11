import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiLoader } from '@taiga-ui/core/components';

@Component({
	selector: 'app-spinner',
	imports: [TuiLoader],
	templateUrl: './spinner.html',
	styleUrl: './spinner.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Spinner {
	inheritColor = input(false);
	overlay = input(false);
	size = input<TuiLoader['size']>('m');
}
