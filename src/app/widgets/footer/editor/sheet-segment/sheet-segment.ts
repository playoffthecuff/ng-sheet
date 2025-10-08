import {
	Component,
	ElementRef,
	inject,
	input,
	signal,
	ViewChild,
	type OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TuiButton, TuiDataList, TuiDropdown, TuiHint } from '@taiga-ui/core';
import { TuiInputInline } from '@taiga-ui/kit';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import { SheetsService } from '../../../../features/editor/sheets-service/sheets-service';
import { SetFocusDirective } from '../../../../shared/directives/set-focus/set-focus-directive';

@Component({
	selector: 'app-sheet-segment',
	imports: [
		TuiDropdown,
		TuiButton,
		RouterLink,
		TuiDataList,
		TuiInputInline,
		TuiHint,
		FormsModule,
		SetFocusDirective,
	],
	templateUrl: './sheet-segment.html',
	styleUrl: './sheet-segment.less',
})
export class SheetSegment implements OnInit {
	@ViewChild('input') input: ElementRef | undefined;
	private readonly r = inject(Router);
	protected readonly ss = inject(SheetsService);
	sheetName = input('');
	removable = input.required<boolean>();
	protected readonly editMode = signal(false);
	sheetId = 0;
	navigateToSheet() {
		this.r.navigate(['editor', this.ss.doc?.id, this.sheetId]);
	}
	name = '';
	prevent(e: PointerEvent) {
		e.preventDefault();
		e.stopPropagation();
	}
	removeSheet() {
		this.ss.removeSheet(this.sheetId);
		pipe(
			O.fromNullable(this.sheetId === this.ss.sheetId ? this.sheetId : null),
			O.flatMap(() => O.fromNullable(this.ss.sheetNames)),
			O.flatMap(A.head),
			O.flatMap((name) => O.fromNullable(this.ss.getSheetId(name))),
			O.tap(() => (this.navigateToSheet(), O.of(undefined))),
		);
	}
	renameSheet(e: Event) {
		this.ss.doc?.sheets.renameSheet(
			this.sheetId,
			(e.target as HTMLInputElement).value,
		);
	}
	addSheet() {
		this.ss.addSheet();
	}
	ngOnInit(): void {
		this.name = this.sheetName();
		this.sheetId = this.ss.getSheetId(this.sheetName()) ?? 0;
	}
	setEditMode() {
		this.editMode.set(true);
		this.input?.nativeElement.focus();
	}
	resetEditMode() {
		this.editMode.set(false);
		this.input?.nativeElement.blur();
	}
	cancelInput() {
		this.name = this.sheetName();
		this.resetEditMode();
	}
}
