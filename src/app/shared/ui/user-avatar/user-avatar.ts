import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiAvatar } from '@taiga-ui/kit';
import { asyncScheduler, observeOn } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth-service';

@Component({
	selector: 'app-user-avatar',
	imports: [TuiAvatar],
	templateUrl: './user-avatar.html',
	styleUrl: './user-avatar.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatar {
	private readonly as = inject(AuthService);
	private readonly user = toSignal(
		this.as.user$.pipe(observeOn(asyncScheduler)),
	);
	protected initials = computed(
		() =>
			this.user()
				?.displayName?.split(' ')
				.slice(0, 2)
				.map((v) => v[0].toUpperCase())
				.join('') ?? '@tui.user',
	);
}
