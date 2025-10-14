import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	input,
	viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import {
	TuiDataListDropdownManager,
	TuiInputInline,
	TuiTooltip,
} from '@taiga-ui/kit';
import type { CellValue } from 'hyperformula';
import { BlurDirective } from '../../../shared/directives/blur/blur-directive';
import { ScrollIntoViewDirective } from '../../../shared/directives/scroll-into-view/scroll-into-view-directive';
import { SetFocusDirective } from '../../../shared/directives/set-focus/set-focus-directive';
import { ContextMenu } from '../cell-context-menu/context-menu';
import { SheetsService } from '../sheets-service/sheets-service';

@Component({
	selector: 'app-data-cell',
	imports: [
		TuiDropdown,
		TuiInputInline,
		SetFocusDirective,
		FormsModule,
		BlurDirective,
		ScrollIntoViewDirective,
		ContextMenu,
		TuiDataList,
		TuiDataListDropdownManager,
		TuiIcon,
		TuiTooltip,
	],
	templateUrl: './data-cell.html',
	styleUrl: './data-cell.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataCell {
	protected readonly ss = inject(SheetsService);
	x = input.required<number>();
	y = input.required<number>();
	value = input<CellValue>();
	update = input(false);
	tableEl = input<HTMLTableElement>();
	isFocused = input.required<boolean>();
	isEditing = input.required<boolean>();
	isSelecting = input.required<boolean>();

	inputElRef = viewChild<ElementRef<HTMLInputElement>>('input');

	private rightClickFlag = false;

	private moveFocusDownIfPossible(y: number, x: number) {
		if (y + 1 < this.ss.sheetHeight) {
			this.ss.userInput = this.ss.getParsedCellValue(y + 1, x);
			this.ss.focusedCell.y = y + 1;
			this.ss.resetEditingCell();
		}
	}

	protected onCellDoubleClick(y: number, x: number) {
		this.ss.setEditingCell(y, x);
	}
	protected scrollNeed(y: number, x: number) {
		return (
			(this.ss.selectedCells.end.x === x && this.ss.selectedCells.end.y === y) ||
			(this.ss.focusedCell.x === x && this.ss.focusedCell.y === y)
		);
	}
	protected onMouseDown(y: number, x: number, e: MouseEvent) {
		if (e.button !== 0 && e.button !== 2) return;
		if (this.ss.editingCell.x === x && this.ss.editingCell.y === y) return;
		if (e.button === 2) this.rightClickFlag = true;
		this.ss.isSelectingFlag = e.button === 0 || e.button === 2;
		if (this.ss.firstTypedSign) {
			this.ss.setParsedCellValue(
				this.ss.editingCell.y,
				this.ss.editingCell.x,
				this.ss.firstTypedSign,
			);
			this.ss.firstTypedSign = '';
		}
		if (this.ss.isEditing) {
			this.ss.clickOutsideFlag = true;
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
			if (!(this.ss.isCellInSelectedRange(y, x) && e.button === 2)) {
				this.ss.selectedCells.start.x = x;
				this.ss.selectedCells.start.y = y;
				this.ss.selectedCells.end.x = -1;
				this.ss.selectedCells.end.y = -1;
				this.ss.focusedCell.x = x;
				this.ss.focusedCell.y = y;
				this.ss.updateUserInput();
			}
		}
		this.ss.resetSelectedRows();
		this.ss.resetSelectedColumns();
	}
	protected onMouseEnter(y: number, x: number, e: MouseEvent) {
		if (!this.ss.isSelectingFlag || e.shiftKey || this.rightClickFlag) return;
		this.ss.selectedCells.end.x = x;
		this.ss.selectedCells.end.y = y;
	}
	protected onMouseUp(e: MouseEvent) {
		if (e.button !== 0 && e.button !== 2) return;
		if (this.ss.isSelectingFlag) {
			this.ss.toggleManualCellInputTrigger();
			this.ss.isSelectingFlag = false;
		}
		this.rightClickFlag = false;
	}
	protected onChange(y: number, x: number, e: Event) {
		if (this.ss.cancelFlag) {
			this.ss.cancelFlag = false;
		} else {
			this.ss.setParsedCellValue(y, x, (e.target as HTMLInputElement).value);
			if (!this.ss.clickOutsideFlag) this.moveFocusDownIfPossible(y, x);
		}
		this.tableEl()?.focus();
	}
	protected onEscape(y: number, x: number, e: Event) {
		(e.target as HTMLInputElement).value = this.ss.getParsedCellValue(y, x);
		this.ss.cancelFlag = true;
		this.tableEl()?.focus();
	}
	protected onEnter(y: number, x: number, e: Event) {
		if (this.ss.firstTypedSign)
			this.ss.setParsedCellValue(y, x, (e.target as HTMLInputElement).value);
		this.moveFocusDownIfPossible(y, x);
		this.ss.editingCell.x = this.ss.focusedCell.x;
		this.ss.editingCell.y = this.ss.focusedCell.y;
	}
	protected pasteFormulaIntoInput(y: number, x: number, v: string) {
		const el = this.inputElRef()?.nativeElement;
		const start = el?.selectionStart ?? 0;
		const end = el?.selectionEnd ?? 0;
		const newV = el?.value.slice(0, start) + v + el?.value.slice(end);
		if (el?.value) el.value = newV;
		const newP = start + v.length;
		if (el?.selectionStart) el.selectionStart = el.selectionEnd = newP;
		el?.focus();
	}
}
