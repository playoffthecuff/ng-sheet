import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';

@Component({
	selector: 'app-footer-about',
	imports: [TuiIcon],
	templateUrl: './footer-about.html',
	styleUrl: './footer-about.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterAbout {}
