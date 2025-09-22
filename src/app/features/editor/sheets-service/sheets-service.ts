import { inject, Injectable, signal } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import * as O from 'fp-ts/Option';
import { flow, pipe } from 'fp-ts/function';
import {
	HyperFormula,
	type CellValue,
	type RawCellContent,
	type SimpleCellAddress,
	type SimpleCellRange,
} from 'hyperformula';
import { HYPER_FORMULA } from '../../../shared/constants/hyperformula';
import { createColumnName } from '../../../shared/utils/create-column-name';
import type { Replace } from '../../../shared/utils/types';

interface Cell {
	x: number;
	y: number;
}
interface Range {
	start: number;
	end: number;
}

const emptySheetData = [...Array(100).keys()].map(() =>
	[...Array(26).keys()].map(() => ''),
);
const emptyTable = HyperFormula.buildFromArray(
	emptySheetData,
	HYPER_FORMULA.OPTIONS,
);

const emptySerializedTable = emptyTable.getAllSheetsSerialized();
interface FirebaseDoc {
	id: string;
	name: string;
	sheets: string;
}

type Doc = Replace<FirebaseDoc, 'sheets', HyperFormula>;

const fakeFirebaseDoc: FirebaseDoc = {
	id: '0',
	name: 'New Table',
	sheets: JSON.stringify(emptySerializedTable),
};
export const docResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
	const ss = inject(SheetsService);
	const docId = route.paramMap.get('docId')!;
	const sheetId = route.paramMap.get('sheetId')!;
	if (!/^\d+$/.test(sheetId)) throw new Error('Invalid sheet Id.');
	ss.initDoc(docId, +sheetId);
};

@Injectable({ providedIn: 'root' })
export class SheetsService {
	doc: Doc | null = null;
	docName = signal('');
	sheetId = 0;
	readonly focusedCell: Cell = { x: 0, y: 0 };
	readonly selectedCells: { start: Cell; end: Cell } = {
		start: { x: -1, y: -1 },
		end: { x: -1, y: -1 },
	};
	readonly copiedCells: SimpleCellRange = {
		end: { col: -1, row: -1, sheet: -1 },
		start: { col: -1, row: -1, sheet: -1 },
	};
	readonly selectedRows: Range = { end: -1, start: -1 };
	readonly selectedColumns: Range = { end: -1, start: -1 };
	readonly editingCell: Cell = { x: -1, y: -1 };
	userInput: string | null = null;
	private createLoadFlow = (docId: string, sheetId: number) =>
		flow(
			() =>
				O.tryCatch(
					() =>
						JSON.parse(fakeFirebaseDoc.sheets) as Record<string, RawCellContent[][]>,
				),
			O.flatMap((sheets) =>
				O.fromNullable(HyperFormula.buildFromSheets(sheets, HYPER_FORMULA.OPTIONS)),
			),
			O.tap((hf) => {
				this.doc = { id: docId, name: fakeFirebaseDoc.name, sheets: hf };
				this.docName.set(fakeFirebaseDoc.name);
				this.sheetId = sheetId;
				this.userInput = this.getParsedCellFormulaOrValue(0, 0);
				return O.of(undefined);
			}),
		);
	initDoc(docId: string, sheetId: number) {
		pipe(
			O.fromNullable(this.doc),
			O.filter((doc) => doc.id === docId),
			O.matchW(
				this.createLoadFlow(docId, sheetId),
				() => (this.sheetId = sheetId),
			),
		);
	}
	addSheet() {
		pipe(
			O.fromNullable(this.doc?.sheets.addSheet()),
			O.flatMap((n) => O.fromNullable(this.doc?.sheets.getSheetId(n))),
			O.tap((id) =>
				O.fromNullable(this.doc?.sheets.setSheetContent(id, emptySheetData)),
			),
		);
	}
	removeSheet(id: number) {
		this.doc?.sheets.removeSheet(id);
	}
	selectAllCells() {
		pipe(
			O.fromNullable(this.doc?.sheets.getSheetDimensions(this.sheetId)),
			O.tap((d) => {
				this.focusedCell.x = 0;
				this.focusedCell.y = 0;
				this.setSelectedRows(0, d.height);
				this.setSelectedColumns(0, d.width);
				return O.of(undefined);
			}),
		);
	}
	parseUserInput(input: string): RawCellContent {
		if (!input) return null;
		if (input.trim().startsWith('=')) return input.trim();
		if (/^(true|false)$/i.test(input)) return input.toLowerCase() === 'true';
		if (!isNaN(+input)) return +input;
		const d = new Date(input);
		if (!isNaN(d.getDate())) return d;
		return input;
	}
	parseCellValue(v?: CellValue): string {
		return v === null || v === undefined ? '' : String(v);
	}

	setSelectedCells(start: Cell, end: Cell) {
		this.selectedCells.start.y = start.y;
		this.selectedCells.start.x = start.x;
		this.selectedCells.end.y = end.y;
		this.selectedCells.end.x = end.x;
	}
	setSelectedCell(x: number, y: number) {
		this.setSelectedCells({ x, y }, { x, y });
	}
	resetSelectedCells() {
		this.selectedCells.start.y = -1;
		this.selectedCells.start.x = -1;
		this.selectedCells.end.y = -1;
		this.selectedCells.end.x = -1;
	}

	setSelectedColumns(start: number, end: number) {
		this.selectedColumns.end = end;
		this.selectedColumns.start = start;
		this.setSelectedCells({ x: start, y: 0 }, { x: end, y: this.sheetHeight });
	}
	setSelectedColumn(x: number) {
		this.focusedCell.x = x;
		this.focusedCell.y = 0;
		this.setSelectedColumns(x, x);
		this.resetSelectedRows();
	}
	resetSelectedColumns() {
		this.selectedColumns.end = -1;
		this.selectedColumns.start = -1;
	}

	setSelectedRow(y: number) {
		this.focusedCell.y = y;
		this.focusedCell.x = 0;
		this.setSelectedCell(y, 0);
		this.setSelectedRows(y, y);
		this.resetSelectedColumns();
	}
	setSelectedRows(start: number, end: number) {
		this.selectedRows.end = end;
		this.selectedRows.start = start;
		this.setSelectedCells({ x: 0, y: start }, { x: this.sheetWidth, y: end });
	}
	resetSelectedRows() {
		this.selectedRows.end = -1;
		this.selectedRows.start = -1;
	}

	setEditingCell(y: number, x: number) {
		this.editingCell.x = x;
		this.editingCell.y = y;
	}
	resetEditingCell() {
		this.setEditingCell(-1, -1);
	}

	getCellValue(y: number, x: number) {
		return this.doc?.sheets.getCellValue({ col: x, row: y, sheet: this.sheetId });
	}
	getCellFormula(y: number, x: number) {
		return this.doc?.sheets.getCellFormula({
			col: x,
			row: y,
			sheet: this.sheetId,
		});
	}
	getMaybeCellFormulaOrValue(y: number, x: number) {
		return this.getCellFormula(y, x) ?? this.getCellValue(y, x);
	}
	getParsedCellValue(y: number, x: number) {
		return this.parseCellValue(this.getCellValue(y, x));
	}
	getParsedCellFormulaOrValue(y: number, x: number) {
		return this.parseCellValue(this.getMaybeCellFormulaOrValue(y, x));
	}
	setParsedCellValue(y: number, x: number, input: string) {
		this.setCellContent(y, x, this.parseUserInput(input));
	}
	getSheetId(name: string) {
		return this.doc?.sheets.getSheetId(name);
	}
	getCellAddress(strAddress: string) {
		return this.doc?.sheets.simpleCellAddressFromString(strAddress, this.sheetId);
	}
	getStrCellAddress(y: number, x: number) {
		return this.doc?.sheets.simpleCellAddressToString({
			col: x,
			row: y,
			sheet: this.sheetId,
		});
	}
	getStrFocusedCellAddress() {
		return this.getStrCellAddress(this.focusedCell.y, this.focusedCell.x);
	}
	getStrAddressRange() {
		const mny = this.selectedCells.start.y;
		const mnx = this.selectedCells.start.x;
		const mxy = this.selectedCells.end.y;
		const mxx = this.selectedCells.end.x;
		if ((mnx === mxx && mny === mxy) || mxx === -1 || mxy === -1)
			return this.getStrFocusedCellAddress();
		return `${this.getStrCellAddress(mny, mnx)}:${this.getStrCellAddress(mxy, mxx)}`;
	}
	getColumnLetter(x: number) {
		return createColumnName(x);
	}
	setCellContent(y: number, x: number, v: RawCellContent | RawCellContent[][]) {
		this.doc?.sheets.setCellContents({ col: x, row: y, sheet: this.sheetId }, v);
	}
	copyToClipboard() {
		const start = {
			col: this.isSelected ? this.selectedCells.start.x : this.focusedCell.x,
			row: this.isSelected ? this.selectedCells.start.y : this.focusedCell.y,
			sheet: this.sheetId,
		};
		const end = {
			col: this.isSelected ? this.selectedCells.end.x : this.focusedCell.x,
			row: this.isSelected ? this.selectedCells.end.y : this.focusedCell.y,
			sheet: this.sheetId,
		};
		this.copiedCells.end = end;
		this.copiedCells.start = start;
		navigator.clipboard.writeText(String(this.doc?.sheets.copy({ end, start })));
	}
	cutToClipboard() {
		const start = {
			col: this.isSelected ? this.selectedCells.start.x : this.focusedCell.x,
			row: this.isSelected ? this.selectedCells.start.y : this.focusedCell.y,
			sheet: this.sheetId,
		};
		const end = {
			col: this.isSelected ? this.selectedCells.end.x : this.focusedCell.x,
			row: this.isSelected ? this.selectedCells.end.y : this.focusedCell.y,
			sheet: this.sheetId,
		};
		this.copiedCells.end = end;
		this.copiedCells.start = start;
		navigator.clipboard.writeText(String(this.doc?.sheets.cut({ end, start })));
	}
	pasteFromClipboard() {
		this.doc?.sheets.paste({
			col: this.focusedCell.x,
			row: this.focusedCell.y,
			sheet: this.sheetId,
		});
		this.resetCopiedCells();
	}
	resetCopiedCells() {
		this.copiedCells.end.col = -1;
		this.copiedCells.end.row = -1;
		this.copiedCells.end.sheet = -1;
		this.copiedCells.start.col = -1;
		this.copiedCells.start.row = -1;
		this.copiedCells.start.sheet = -1;
	}

	get focusedCellValue() {
		return this.getCellValue(this.focusedCell.y, this.focusedCell.x);
	}
	get columnLetters() {
		return [...Array(this.sheetWidth).keys()].map((v) => createColumnName(v));
	}
	get sheetValues() {
		return this.doc?.sheets.getSheetValues(this.sheetId);
	}
	get sheetNames() {
		return this.doc?.sheets.getSheetNames();
	}
	get sheetIds() {
		return this.sheetNames?.map(this.getSheetId);
	}
	get sheetName() {
		return this.doc?.sheets.getSheetName(this.sheetId);
	}
	get sheetDimensions() {
		return this.doc?.sheets.getSheetDimensions(this.sheetId);
	}
	get sheetHeight() {
		return this.sheetDimensions?.height ?? 0;
	}
	get sheetWidth() {
		return this.sheetDimensions?.width ?? 0;
	}
	get isEditing() {
		return this.editingCell.x !== -1 || this.editingCell.y !== -1;
	}
	get isSelected() {
		return this.selectedCells.end.x !== -1 && this.selectedCells.end.y !== -1;
	}

	isCellColInSelectedRange(x: number) {
		if (this.selectedCells.end.x === -1) return false;
		return (
			x >= Math.min(this.selectedCells.end.x, this.selectedCells.start.x) &&
			x <= Math.max(this.selectedCells.end.x, this.selectedCells.start.x)
		);
	}
	isCellRowInSelectedRange(y: number) {
		if (this.selectedCells.end.y === -1) return false;
		return (
			y >= Math.min(this.selectedCells.end.y, this.selectedCells.start.y) &&
			y <= Math.max(this.selectedCells.end.y, this.selectedCells.start.y)
		);
	}
	isCellInSheet(c: SimpleCellAddress) {
		return c.col < this.sheetWidth && c.row < this.sheetHeight;
	}
	isRangeInSheet(r: SimpleCellRange) {
		return (
			r.end.col < this.sheetWidth &&
			r.end.row < this.sheetHeight &&
			r.start.col < this.sheetWidth &&
			r.start.row < this.sheetHeight
		);
	}

	updateUserInput() {
		this.userInput = this.getParsedCellFormulaOrValue(
			this.focusedCell.y,
			this.focusedCell.x,
		);
	}

	removeRows(from: number, count: number) {
		this.doc?.sheets.removeRows(this.sheetId, [from, count]);
	}
	removeColumns(from: number, count: number) {
		this.doc?.sheets.removeColumns(this.sheetId, [from, count]);
	}
	addEmptyRows(startIndex: number, count: number) {
		this.doc?.sheets.batch(() => {
			this.doc?.sheets.addRows(this.sheetId, [startIndex, count]);
			this.doc?.sheets.setCellContents(
				{ col: 0, row: startIndex, sheet: this.sheetId },
				[...Array(count).keys()].map(() =>
					[...Array(this.sheetWidth).keys()].map(() => ''),
				),
			);
		});
	}
	addEmptyColumns(startIndex: number, count: number) {
		this.doc?.sheets.batch(() => {
			this.doc?.sheets.addColumns(this.sheetId, [startIndex, count]);
			this.doc?.sheets.setCellContents(
				{ col: startIndex, row: 0, sheet: this.sheetId },
				[...Array(this.sheetWidth).keys()].map(() =>
					[...Array(count).keys()].map(() => ''),
				),
			);
		});
	}
	addEmptyCell(y: number, x: number, displacementDirection: 'bottom' | 'right') {
		if (displacementDirection === 'bottom') {
			const end = this.getCellValue(this.sheetHeight - 1, x);
			if (end === '' || end === null || end === undefined) {
				this.doc?.sheets.batch(() => {
					this.setCellContent(this.sheetHeight - 1, x, null);
					this.doc?.sheets.moveCells(
						{
							start: { col: x, row: y, sheet: this.sheetId },
							end: { col: x, row: this.sheetHeight - 2, sheet: this.sheetId },
						},
						{ col: x, row: y + 1, sheet: this.sheetId },
					);
					this.setCellContent(y, x, '');
				});
			} else {
				this.addEmptyRows(y, 1);
				this.setCellContent(y, x, '');
			}
		}
		if (displacementDirection === 'right') {
			const end = this.getCellValue(y, this.sheetWidth - 1);
			if (end === '' || end === null || end === undefined) {
				this.doc?.sheets.batch(() => {
					this.setCellContent(y, this.sheetWidth - 1, null);
					this.doc?.sheets.moveCells(
						{
							start: { col: x, row: y, sheet: this.sheetId },
							end: { col: this.sheetWidth - 2, row: y, sheet: this.sheetId },
						},
						{ col: x + 1, row: y, sheet: this.sheetId },
					);
					this.setCellContent(y, x, '');
				});
			} else {
				this.addEmptyColumns(x, 1);
				this.setCellContent(y, x, '');
			}
		}
	}
	removeCell(y: number, x: number, displacementDirection: 'bottom' | 'right') {
		if (displacementDirection === 'bottom') {
			this.doc?.sheets.batch(() => {
				this.doc?.sheets.moveCells(
					{
						start: { col: x, row: y + 1, sheet: this.sheetId },
						end: { col: x, row: this.sheetHeight - 1, sheet: this.sheetId },
					},
					{ col: x, row: y, sheet: this.sheetId },
				);
				this.setCellContent(this.sheetHeight - 1, x, '');
			});
		}
		if (displacementDirection === 'right') {
			this.doc?.sheets.batch(() => {
				this.doc?.sheets.moveCells(
					{
						start: { col: x + 1, row: y, sheet: this.sheetId },
						end: { col: this.sheetWidth - 1, row: y, sheet: this.sheetId },
					},
					{ col: x, row: y, sheet: this.sheetId },
				);
				this.setCellContent(y, this.sheetWidth - 1, '');
			});
		}
	}
}
