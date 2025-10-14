import { inject, Injectable } from '@angular/core';
import { SheetsService } from '../sheets-service/sheets-service';

@Injectable({ providedIn: 'root' })
export class KeyboardService {
	private readonly ss = inject(SheetsService);
	tableMaps = {
		arrows: {
			ArrowUp: () => {
				if (this.ss.focusedCell.y > 0) this.ss.focusedCell.y--;
			},
			ArrowDown: () => {
				if (this.ss.focusedCell.y + 1 < this.ss.sheetHeight)
					this.ss.focusedCell.y++;
			},
			ArrowLeft: () => {
				if (this.ss.focusedCell.x > 0) this.ss.focusedCell.x--;
			},
			ArrowRight: () => {
				if (this.ss.focusedCell.x + 1 < this.ss.sheetWidth) this.ss.focusedCell.x++;
			},
		},
		other: {
			Enter: () => {
				if (!this.ss.isEditing) {
					this.ss.editingCell.x = this.ss.focusedCell.x;
					this.ss.editingCell.y = this.ss.focusedCell.y;
				} else {
					this.ss.resetEditingCell();
				}
			},
			Escape: () => {
				if (this.ss.editingCell.x !== -1 || this.ss.editingCell.y !== -1) {
					const { x, y } = this.ss.editingCell;
					this.ss.resetEditingCell();
					const v = this.ss.doc?.sheets
						.getCellValue({ col: x, row: y, sheet: this.ss.sheetId })
						?.valueOf();
					this.ss.setCellContent(y, x, v);
				}
				this.ss.resetCopiedCells();
			},
			Delete: () => {
				if (this.ss.isSelected) {
					this.ss.setCellContent(
						Math.min(this.ss.selectedCells.start.y, this.ss.selectedCells.end.y),
						Math.min(this.ss.selectedCells.start.x, this.ss.selectedCells.end.x),
						[
							...Array(
								Math.abs(this.ss.selectedCells.end.y - this.ss.selectedCells.start.y) +
									1,
							).keys(),
						].map(() =>
							[
								...Array(
									Math.abs(this.ss.selectedCells.end.x - this.ss.selectedCells.start.x) +
										1,
								).keys(),
							].map(() => ''),
						),
					);
				} else {
					this.ss.setCellContent(this.ss.focusedCell.y, this.ss.focusedCell.x, '');
				}
				this.ss.resetEditingCell();
			},
		},
		shift: {
			arrows: {
				ArrowUp: () => {
					this.ss.selectedCells.end.y = Math.max(0, this.ss.selectedCells.end.y - 1);
				},
				ArrowDown: () => {
					this.ss.selectedCells.end.y = Math.min(
						this.ss.sheetHeight - 1,
						this.ss.selectedCells.end.y + 1,
					);
				},
				ArrowLeft: () => {
					this.ss.selectedCells.end.x = Math.max(0, this.ss.selectedCells.end.x - 1);
				},
				ArrowRight: () => {
					this.ss.selectedCells.end.x = Math.min(
						this.ss.sheetWidth - 1,
						this.ss.selectedCells.end.x + 1,
					);
				},
			},
		},
		ctrl: {
			c: () => this.ss.copyToClipboard(),
			x: () => this.ss.cutToClipboard(),
			v: () => this.ss.pasteFromClipboard(),
		},
	};
	isMatchTableArrows(key: string) {
		return Object.keys(this.tableMaps.arrows).includes(key);
	}
	isMatchTableOther(key: string) {
		return Object.keys(this.tableMaps.other).includes(key);
	}
	isMatchTableCtrl(key: string) {
		return Object.keys(this.tableMaps.ctrl).includes(key);
	}
}
