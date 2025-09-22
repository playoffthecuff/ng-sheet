import {
	Component,
	ElementRef,
	HostListener,
	inject,
	ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	TuiAlertService,
	TuiHintDirective,
	TuiTextfield,
} from '@taiga-ui/core';
import { CUSTOM_ICON_RESOLVER_PROVIDER } from '../../../shared/providers/icon-resolver';
import { SheetsService } from '../sheets-service/sheets-service';

@Component({
	selector: 'app-cell-input',
	imports: [TuiTextfield, FormsModule, TuiHintDirective],
	templateUrl: './cell-input.html',
	styleUrl: './cell-input.less',
	providers: [CUSTOM_ICON_RESOLVER_PROVIDER],
})
export class CellInput {
	@ViewChild('cellValue') cellValue: ElementRef | undefined;
	@ViewChild('cellAddress') cellAddress: ElementRef | undefined;
	protected readonly ss = inject(SheetsService);
	private readonly alerts = inject(TuiAlertService);

	@HostListener('document:keydown', ['$event'])
	handleDocumentKeydown(e: KeyboardEvent) {
		if (e.ctrlKey && e.key === 'j') {
			e.preventDefault();
			this.cellAddress?.nativeElement.focus();
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
		this.cellValue?.nativeElement.blur();
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
			this.showNotification('Input Error!', 'Invalid address or range.');
		if (cellIn) {
			this.cellAddress?.nativeElement.blur();
			this.ss.focusedCell.x = cell.col;
			this.ss.focusedCell.y = cell.row;
		}
		if (rangeIn) {
			const mnx = Math.min(range.start.col, range.end.col);
			const mxx = Math.max(range.start.col, range.end.col);
			const mny = Math.min(range.start.row, range.end.row);
			const mxy = Math.max(range.start.row, range.end.row);
			this.ss.setSelectedCells({ x: mnx, y: mny }, { x: mxx, y: mxy });
			this.cellAddress?.nativeElement.blur();
			this.ss.focusedCell.x = mnx;
			this.ss.focusedCell.y = mny;
		}
	}
}
