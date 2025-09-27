import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth-service';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-heading',
	imports: [AsyncPipe],
	templateUrl: './heading.html',
	styleUrl: './heading.less',
})
export class Heading {
	private readonly as = inject(AuthService);
	protected readonly user$ = this.as.user$;
}
