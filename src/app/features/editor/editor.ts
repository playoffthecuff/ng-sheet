import {
	Component,
	ElementRef,
	HostListener,
	inject,
	ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiDataList, TuiDropdown, TuiHint } from '@taiga-ui/core';
import { TuiInputInline, TuiTabs } from '@taiga-ui/kit';
import { LayoutService } from '../../core/services/layout/layout-service';
import { BlurDirective } from '../../shared/directives/blur/blur-directive';
import { ScrollIntoViewDirective } from '../../shared/directives/scroll-into-view/scroll-into-view-directive';
import { SetFocusDirective } from '../../shared/directives/set-focus/set-focus-directive';
import { KeyboardService } from './keyboard-service/keyboard-service';
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
		ScrollIntoViewDirective,
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
	private readonly ks = inject(KeyboardService);
	private cancelFlag = false;
	private firstTypedSign = '';
	private isSelectingFlag = false;
	private clickOutsideFlag = false;

	@ViewChild('table') table: ElementRef | undefined;

	@HostListener('keydown', ['$event'])
	protected handleKeyDown(e: KeyboardEvent) {
		if (e.key === ' ' && !this.ss.isEditing) e.preventDefault();
		if (!e.shiftKey && this.ks.isMatchTableArrows(e.key) && !this.ss.isEditing) {
			e.preventDefault();
			this.ss.resetSelectedCells();
			this.ks.tableMaps.arrows[e.key as keyof typeof this.ks.tableMaps.arrows]();
			this.ss.updateUserInput();
			this.firstTypedSign = '';
		}
		if (e.shiftKey && this.ks.isMatchTableArrows(e.key) && !this.ss.isEditing) {
			if (!this.ss.isSelected)
				this.ss.setSelectedCell(this.ss.focusedCell.x, this.ss.focusedCell.y);
			this.ks.tableMaps.shift.arrows[
				e.key as keyof typeof this.ks.tableMaps.shift.arrows
			]();
			this.firstTypedSign = '';
		}
		if (this.ks.isMatchTableOther(e.key)) {
			this.ks.tableMaps.other[e.key as keyof typeof this.ks.tableMaps.other]();
			this.ss.updateUserInput();
			this.table?.nativeElement?.focus();
			this.firstTypedSign = '';
		}
		if (
			!this.ks.isMatchTableArrows(e.key) &&
			!this.ks.isMatchTableOther(e.key) &&
			!e.altKey &&
			!e.ctrlKey &&
			e.key.length === 1
		) {
			if (!this.ss.isEditing) {
				this.ss.userInput = e.key;
				this.ss.editingCell.x = this.ss.focusedCell.x;
				this.ss.editingCell.y = this.ss.focusedCell.y;
				this.firstTypedSign = e.key;
			} else {
				this.firstTypedSign = '';
			}
		}
		if (e.ctrlKey && this.ks.isMatchTableCtrl(e.key))
			this.ks.tableMaps.ctrl[e.key as keyof typeof this.ks.tableMaps.ctrl]();
	}
	protected handleCellDoubleClick(y: number, x: number) {
		this.ss.setEditingCell(y, x);
	}
	private moveFocusDownIfPossible(y: number, x: number) {
		if (y + 1 < this.ss.sheetHeight) {
			this.ss.userInput = this.ss.getParsedCellValue(y + 1, x);
			this.ss.focusedCell.y = y + 1;
			this.ss.resetEditingCell();
		}
	}
	protected setParsedValue(y: number, x: number, v: string) {
		this.ss.setParsedCellValue(y, x, v);
		if (y + 1 < this.ss.sheetHeight) {
			this.ss.userInput = this.ss.getParsedCellValue(y + 1, x);
			this.ss.focusedCell.y = y + 1;
			this.ss.resetEditingCell();
		}
	}
	protected handleChange(y: number, x: number, e: Event) {
		if (this.cancelFlag) {
			this.cancelFlag = false;
		} else {
			this.ss.setParsedCellValue(y, x, (e.target as HTMLInputElement).value);
			if (!this.clickOutsideFlag) this.moveFocusDownIfPossible(y, x);
		}
		this.table?.nativeElement?.focus();
	}
	protected handleEscape(y: number, x: number, e: Event) {
		(e.target as HTMLInputElement).value = this.ss.getParsedCellValue(y, x);
		this.cancelFlag = true;
		this.table?.nativeElement?.focus();
	}
	protected handleEnter(y: number, x: number, e: Event) {
		if (this.firstTypedSign) {
			this.ss.setParsedCellValue(y, x, (e.target as HTMLInputElement).value);
		}
		this.moveFocusDownIfPossible(y, x);
		this.ss.editingCell.x = this.ss.focusedCell.x;
		this.ss.editingCell.y = this.ss.focusedCell.y;
	}
	protected handleMouseDown(y: number, x: number, e: MouseEvent) {
		this.isSelectingFlag = true;
		if (this.firstTypedSign) {
			this.ss.setParsedCellValue(
				this.ss.editingCell.y,
				this.ss.editingCell.x,
				this.firstTypedSign,
			);
			this.firstTypedSign = '';
		}
		if (this.ss.isEditing) {
			this.clickOutsideFlag = true;
			this.ss.resetEditingCell();
		}
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
			this.ss.selectedCells.start.x = x;
			this.ss.selectedCells.start.y = y;
			this.ss.selectedCells.end.x = -1;
			this.ss.selectedCells.end.y = -1;
			this.ss.focusedCell.x = x;
			this.ss.focusedCell.y = y;
			this.ss.updateUserInput();
		}
		this.ss.resetSelectedRows();
		this.ss.resetSelectedColumns();
	}
	protected handleMouseEnter(y: number, x: number) {
		if (!this.isSelectingFlag) return;
		this.ss.selectedCells.end.x = x;
		this.ss.selectedCells.end.y = y;
	}
	protected handleMouseUp() {
		this.isSelectingFlag = false;
	}

	protected scrollNeed(y: number, x: number) {
		return (
			(this.ss.selectedCells.end.x === x && this.ss.selectedCells.end.y === y) ||
			(this.ss.focusedCell.x === x && this.ss.focusedCell.y === y)
		);
	}
}
