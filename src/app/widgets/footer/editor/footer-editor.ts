import { Component, inject, type OnInit } from '@angular/core';
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
})
export class FooterEditor implements OnInit {
	private readonly r = inject(Router);
	protected ss = inject(SheetsService);
	navigateToSheet(id: number) {
		this.r.navigateByUrl(`/editor/0/${id}`);
	}
	last = 0;
	// prevent(e: PointerEvent) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// }
	// sheetNames = [...(this.ss.sheetNames ?? [])];
	// removeSheet(id: number) {
	// 	this.ss.removeSheet(id);
	// 	pipe(
	// 		O.fromNullable(id === this.ss.sheetId ? id : null),
	// 		O.flatMap(() => O.fromNullable(this.ss.sheetNames)),
	// 		O.flatMap(A.head),
	// 		O.flatMap((name) => O.fromNullable(this.ss.getSheetId(name))),
	// 		O.tap((id) => (this.navigateToSheet(id), O.of(undefined))),
	// 	);
	// }
	// renameSheet(e: Event, id: number) {
	// 	this.ss.doc?.sheets.renameSheet(id, (e.target as HTMLInputElement).value);
	// }
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
	huy() {
		console.log('huy');
	}
}
