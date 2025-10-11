import { Component, input } from '@angular/core';

@Component({
	selector: 'app-divider',
	imports: [],
	templateUrl: './divider.html',
	styleUrl: './divider.less',
})
export class Divider {
	isVertical = input(false);
}
