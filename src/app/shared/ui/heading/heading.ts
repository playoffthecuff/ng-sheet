import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth-service';

@Component({
	selector: 'app-heading',
	imports: [AsyncPipe],
	templateUrl: './heading.html',
	styleUrl: './heading.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Heading {
	private readonly as = inject(AuthService);
	protected readonly user$ = this.as.user$;
}
