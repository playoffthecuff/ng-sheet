import {
	Component,
	ElementRef,
	HostListener,
	inject,
	ViewChild,
	type OnDestroy,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { FileManagerService } from '../../../../features/file-manager/service/file-manager-service';

@Component({
	selector: 'app-header-search',
	imports: [ReactiveFormsModule, TuiTextfield],
	templateUrl: './header-search.html',
	styleUrl: './header-search.less',
})
export class HeaderSearch implements OnDestroy {
	private readonly fms = inject(FileManagerService);
	protected readonly control = new FormControl('');
	private readonly sub: Subscription | null = null;
	@HostListener('document:keydown', ['$event'])
	protected onKeyDown(e: KeyboardEvent) {
		if (e.altKey && e.key === 'k') this.input?.nativeElement.focus();
	}
	@ViewChild('input') input: ElementRef | undefined;
	constructor() {
		this.sub = this.control.valueChanges
			.pipe(debounceTime(300), distinctUntilChanged())
			.subscribe((v) => {
				this.fms.searchText.set(v ?? '');
			});
	}

	ngOnDestroy() {
		this.sub?.unsubscribe();
	}
}
