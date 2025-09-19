import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { CUSTOM_ICON_RESOLVER_PROVIDER } from '../../../shared/providers/icon-resolver';
import { SheetsService } from '../sheets-service/sheets-service';

@Component({
	selector: 'app-cell-input',
	imports: [TuiTextfield, FormsModule],
	templateUrl: './cell-input.html',
	styleUrl: './cell-input.less',
	providers: [CUSTOM_ICON_RESOLVER_PROVIDER],
})
export class CellInput {
	@ViewChild('cellValue') input: ElementRef | undefined;
	protected readonly ss = inject(SheetsService);
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
			this.ss.userInput = this.ss.getParsedCellValue(y + 1, x);
			this.ss.focusedCell.y = y + 1;
		}
		this.input?.nativeElement.blur();
	}
}
