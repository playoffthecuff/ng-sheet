import {
	ChangeDetectionStrategy,
	Component,
	inject,
	type OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import {
	TuiButton,
	TuiDataList,
	TuiDropdown,
	TuiHint,
	TuiIcon,
} from '@taiga-ui/core';
import { TuiSegmented } from '@taiga-ui/kit';
import { filter } from 'rxjs';
import { SheetsService } from '../../../features/editor/sheets-service/sheets-service';
import { SheetSegment } from './sheet-segment/sheet-segment';

@Component({
	selector: 'app-footer-editor',
	imports: [
		TuiIcon,
		TuiDropdown,
		TuiButton,
		TuiSegmented,
		TuiDataList,
		TuiHint,
		FormsModule,
		SheetSegment,
		TuiIcon,
	],
	templateUrl: './footer-editor.html',
	styleUrl: './footer-editor.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterEditor implements OnInit {
	private readonly r = inject(Router);
	protected ss = inject(SheetsService);
	protected readonly addSheetPhrase = $localize`Add Sheet`;
	navigateToSheet(id: number) {
		this.r.navigate(['editor', this.ss.doc?.id, id]);
	}
	last = 0;
	ngOnInit() {
		this.r.events
			.pipe(filter((e) => e instanceof NavigationEnd))
			.subscribe((e: NavigationEnd) => {
				const parts = e.urlAfterRedirects.split('/').filter(Boolean);
				this.last = +parts[parts.length - 1];
			});
	}
	get activeIndex() {
		return (
			this.ss.sheetNames?.findIndex(
				(v) => v === this.ss.doc?.sheets.getSheetName(this.last),
			) ?? 0
		);
	}
}
