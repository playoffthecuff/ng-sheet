import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	TuiAlertService,
	TuiButton,
	TuiDataList,
	TuiDropdown,
	TuiHintDirective,
	TuiIcon,
	TuiTextfield,
} from '@taiga-ui/core';
import { TuiChevron, TuiTooltip } from '@taiga-ui/kit';
import { CUSTOM_ICON_RESOLVER_PROVIDER } from '../../../shared/providers/icon-resolver';
import { SheetsService } from '../sheets-service/sheets-service';

@Component({
	selector: 'app-cell-input',
	imports: [
		TuiTextfield,
		FormsModule,
		TuiHintDirective,
		TuiButton,
		TuiChevron,
		TuiDataList,
		TuiDropdown,
		TuiIcon,
		TuiTooltip,
	],
	templateUrl: './cell-input.html',
	styleUrl: './cell-input.less',
	providers: [CUSTOM_ICON_RESOLVER_PROVIDER],
	host: { '(document:keydown)': 'handleDocumentKeydown($event)' },
})
export class CellInput {
	protected readonly ss = inject(SheetsService);
	private readonly alerts = inject(TuiAlertService);
	private readonly cellValue =
		viewChild.required<ElementRef<HTMLInputElement>>('cellValue');
	private readonly cellAddress =
		viewChild.required<ElementRef<HTMLInputElement>>('cellAddress');

	protected readonly addrCtrlJPhrase = $localize`Address (Ctrl + J)`;

	protected handleDocumentKeydown(e: KeyboardEvent) {
		if (e.ctrlKey && e.key === 'j') {
			e.preventDefault();
			this.cellAddress().nativeElement.focus();
		}
	}

	protected showNotification(heading: string, text: string): void {
		this.alerts.open(text, { label: heading }).subscribe();
	}
	protected changeFocusedCell(e: Event) {
		const { value } = e.target as HTMLInputElement;
		const addr = this.ss.getCellAddress(value);
		if (addr) {
			this.ss.setCellContent(addr.row, addr.col, this.ss.parseUserInput(value));
		}
	}
	protected getAddressRange() {
		return this.ss.getStrAddressRange();
	}
	protected setFocusedCellValue(e: Event) {
		const { value } = e.target as HTMLInputElement;
		const { x, y } = this.ss.focusedCell;
		const pv = this.ss.parseCellValue(value);
		this.ss.setCellContent(y, x, pv);
		this.ss.userInput = pv;
		if (y + 1 < this.ss.sheetHeight) {
			this.ss.userInput = this.ss.getParsedCellFormulaOrValue(y + 1, x);
			this.ss.focusedCell.y = y + 1;
		}
		this.cellValue().nativeElement.blur();
		this.ss.manualUpdateTrigger.update((v) => !v);
	}
	protected setSelectedRange(e: Event) {
		const { value } = e.target as HTMLInputElement;
		const range = this.ss.doc?.sheets.simpleCellRangeFromString(
			value,
			this.ss.sheetId,
		);
		const cell = this.ss.getCellAddress(value);
		const cellIn = cell && this.ss.isCellInSheet(cell);
		const rangeIn = range && this.ss.isRangeInSheet(range);
		if (!cellIn && !rangeIn)
			this.showNotification(
				$localize`Input Error!`,
				$localize`Invalid address or range.`,
			);
		if (cellIn) {
			this.cellAddress().nativeElement.blur();
			this.ss.focusedCell.x = cell.col;
			this.ss.focusedCell.y = cell.row;
		}
		if (rangeIn) {
			const mnx = Math.min(range.start.col, range.end.col);
			const mxx = Math.max(range.start.col, range.end.col);
			const mny = Math.min(range.start.row, range.end.row);
			const mxy = Math.max(range.start.row, range.end.row);
			this.ss.setSelectedCells({ x: mnx, y: mny }, { x: mxx, y: mxy });
			this.cellAddress().nativeElement.blur();
			this.ss.focusedCell.x = mnx;
			this.ss.focusedCell.y = mny;
		}
	}
	protected pasteFormulaToCellValueInput(v: string) {
		const el = this.cellValue().nativeElement;
		const start = el.selectionStart ?? 0;
		const end = el.selectionEnd ?? 0;
		const newV = el.value.slice(0, start) + v + el.value.slice(end);
		el.value = newV;
		const newP = start + v.length;
		el.selectionStart = el.selectionEnd = newP;
		el.focus();
	}
}
