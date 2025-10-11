import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiTitle, TuiLink } from '@taiga-ui/core';

@Component({
	selector: 'app-getting-started',
	imports: [TuiTitle, RouterLink, TuiLink],
	templateUrl: './getting-started.html',
	styleUrl: './getting-started.less',
})
export class GettingStarted {}
