import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiLink, TuiTitle } from '@taiga-ui/core';

@Component({
	selector: 'app-getting-started',
	imports: [TuiTitle, RouterLink, TuiLink],
	templateUrl: './getting-started.html',
	styleUrl: './getting-started.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStarted {}
