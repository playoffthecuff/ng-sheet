import { Component, inject, signal } from '@angular/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiDataList, TuiDropdown, TuiHint } from '@taiga-ui/core';
import { TuiTabs } from '@taiga-ui/kit';
import { LayoutService } from '../../core/services/layout/layout-service';
import { BorderDirective } from '../../shared/directives/border/border-directive';
import { HighlightDirective } from '../../shared/directives/highlight/highlight-directive';
import { InvertHighlightDirective } from '../../shared/directives/invert-highlight/invert-highlight-directive';
import { SheetsService } from './sheets-service';

@Component({
	selector: 'app-editor',
	imports: [
		TuiTable,
		HighlightDirective,
		BorderDirective,
		InvertHighlightDirective,
		TuiHint,
		TuiDataList,
		TuiDropdown,
		TuiTabs,
	],
	templateUrl: './editor.html',
	styleUrl: './editor.less',
})
export class Editor {
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.footerVariant = 'editor';
	}
	protected readonly ss = inject(SheetsService);
	protected readonly columns = this.ss.columnIndexes;
	protected readonly selectedRange = signal<[number, number][]>([
		[0, 0],
		[0, 0],
	]);
	protected readonly isAllCellSelected = signal(false);
	protected selectCell(y: number, x: number) {
		this.selectedRange.set([
			[y, x],
			[y, x],
		]);
	}
	protected isCellSelected(y: number, x: number) {
		if (this.selectedRange().length !== 2) return false;
		const [[y1, x1], [y2, x2]] = this.selectedRange();
		return y >= y1 && y <= y2 && x >= x1 && x <= x2;
	}
	protected isColumnHighlighted(x: number) {
		if (this.selectedRange().length !== 2) return false;
		const [[, x1], [, x2]] = this.selectedRange();
		return x >= x1 && x <= x2;
	}
	protected isRowSelected(y: number) {
		if (this.selectedRange().length !== 2) return false;
		const [[y1], [y2]] = this.selectedRange();
		return y >= y1 && y <= y2;
	}
	protected selectAllCells() {
		this.isAllCellSelected.update((v) => !v);
	}
	protected addSheet() {
		this.ss.addSheet();
	}
}
