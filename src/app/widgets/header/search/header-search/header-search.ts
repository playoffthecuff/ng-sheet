import {
	Component,
	ElementRef,
	inject,
	viewChild,
	type OnDestroy,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { AuthService } from '../../../../core/services/auth/auth-service';
import { FileManagerService } from '../../../../features/file-manager/service/file-manager-service';
import { AsyncPipe } from '@angular/common';

@Component({
	selector: 'app-header-search',
	imports: [ReactiveFormsModule, TuiTextfield, AsyncPipe],
	templateUrl: './header-search.html',
	styleUrl: './header-search.less',
	host: { '(document:keydown)': 'onKeyDown($event)' },
})
export class HeaderSearch implements OnDestroy {
	private readonly fms = inject(FileManagerService);
	private readonly as = inject(AuthService);
	protected readonly control = new FormControl('');
	private readonly sub: Subscription | null = null;
	private readonly input =
		viewChild.required<ElementRef<HTMLInputElement>>('input');
	protected readonly user$ = this.as.user$;

	constructor() {
		this.sub = this.control.valueChanges
			.pipe(debounceTime(300), distinctUntilChanged())
			.subscribe((v) => {
				this.fms.searchText.set(v ?? '');
			});
	}

	protected onKeyDown(e: KeyboardEvent) {
		if (e.altKey && e.key === 'k') this.input().nativeElement.focus();
	}

	ngOnDestroy() {
		this.sub?.unsubscribe();
	}
}
