import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-intro',
	imports: [],
	templateUrl: './intro.html',
	styleUrl: './intro.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Intro {}
