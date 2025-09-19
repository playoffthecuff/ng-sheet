import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiDataList, TuiDropdown, TuiHint } from '@taiga-ui/core';
import { TuiInputInline, TuiTabs } from '@taiga-ui/kit';
import { LayoutService } from '../../core/services/layout/layout-service';
import { BlurDirective } from '../../shared/directives/blur/blur-directive';
import { SetFocusDirective } from '../../shared/directives/set-focus/set-focus-directive';
import { SheetsService } from './sheets-service/sheets-service';

@Component({
	selector: 'app-editor',
	imports: [
		TuiTable,
		TuiHint,
		TuiDataList,
		TuiDropdown,
		TuiTabs,
		TuiInputInline,
		SetFocusDirective,
		FormsModule,
		BlurDirective,
	],
	templateUrl: './editor.html',
	styleUrl: './editor.less',
})
export class Editor {
	private readonly ls = inject(LayoutService);
	constructor() {
		this.ls.footerVariant = 'editor';
		this.ls.headerVariant = 'editor';
	}
	protected readonly ss = inject(SheetsService);
	@HostListener('window:keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		console.log(event.key);
	}
	protected handleCellClick(y: number, x: number, e: PointerEvent) {
		this.ss.resetEditingCell();
		if (e.shiftKey) {
			this.ss.setSelectedCells(
				{
					x: Math.min(x, this.ss.focusedCell.x),
					y: Math.min(y, this.ss.focusedCell.y),
				},
				{
					x: Math.max(x, this.ss.focusedCell.x),
					y: Math.max(y, this.ss.focusedCell.y),
				},
			);
		} else {
			this.ss.resetSelectedCells();
			this.ss.focusedCell.x = x;
			this.ss.focusedCell.y = y;
			this.ss.userInput = this.ss.parseCellValue(this.ss.focusedCellValue);
		}
		this.ss.resetSelectedRows();
		this.ss.resetSelectedColumns();
	}
	protected handleCellDoubleClick(y: number, x: number) {
		this.ss.setEditingCell(y, x);
	}
	onChange(y: number, x: number, e: Event) {
		this.ss.setParsedCellValue(y, x, (e.target as HTMLInputElement).value);
		if (y + 1 < this.ss.sheetHeight) {
			this.ss.userInput = this.ss.getParsedCellValue(y + 1, x);
			this.ss.focusedCell.y = y + 1;
			this.ss.resetEditingCell();
		}
	}
}
