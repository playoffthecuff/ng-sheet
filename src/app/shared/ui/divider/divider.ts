import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'app-divider',
	imports: [],
	templateUrl: './divider.html',
	styleUrl: './divider.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Divider {
	isVertical = input(false);
}
