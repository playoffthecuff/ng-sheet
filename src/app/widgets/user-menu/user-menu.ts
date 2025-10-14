import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FirebaseError } from '@angular/fire/app';
import { Router, RouterLink } from '@angular/router';
import { TuiButton, TuiLink } from '@taiga-ui/core';
import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiDropdown } from '@taiga-ui/core/directives/dropdown';
import { TuiAvatar, TuiButtonLoading, TuiFade } from '@taiga-ui/kit';
import * as E from 'fp-ts/Either';
import { asyncScheduler, observeOn } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth-service';
import { DateToDayPartPipe } from '../../shared/pipes/date-to-day-part/date-to-day-part-pipe';
import { Divider } from '../../shared/ui/divider/divider';
import { LangSwitcher } from '../../shared/ui/lang-switcher/lang-switcher';
import { ThemeSwitcher } from '../../shared/ui/theme-switcher/theme-switcher';
import { withEither } from '../../shared/utils/with-either';
import { withLoading } from '../../shared/utils/with-loading';

@Component({
	selector: 'app-user-menu',
	imports: [
		TuiDataList,
		TuiDropdown,
		TuiAvatar,
		DateToDayPartPipe,
		ThemeSwitcher,
		LangSwitcher,
		TuiButton,
		TuiButtonLoading,
		TuiLink,
		RouterLink,
		TuiFade,
		Divider,
	],
	templateUrl: './user-menu.html',
	styleUrl: './user-menu.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenu {
	protected open = false;
	protected onClick() {
		this.open = false;
	}
	private readonly r = inject(Router);
	private readonly as = inject(AuthService);
	private readonly user = toSignal(
		this.as.user$.pipe(observeOn(asyncScheduler)),
	);
	protected readonly isLoading = signal(false);
	protected readonly time = new Date();
	protected readonly initials = computed(
		() =>
			this.user()
				?.displayName?.split(' ')
				.slice(0, 2)
				.map((v) => v[0].toUpperCase())
				.join('') ?? '@tui.user',
	);
	protected readonly email = computed(() => this.user()?.email);
	protected readonly name = computed(() => this.user()?.displayName);
	protected logout() {
		this.as
			.logout()
			.pipe(withLoading(this.isLoading.set), withEither(FirebaseError))
			.subscribe(E.match(console.error, () => this.r.navigateByUrl('/login')));
	}
	protected login() {
		this.open = false;
		this.r.navigateByUrl('/login');
	}
	protected register() {
		this.open = false;
		this.r.navigateByUrl('/register');
	}
}
