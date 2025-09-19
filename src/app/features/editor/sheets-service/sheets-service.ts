import { effect, inject, Injectable, signal } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import * as O from 'fp-ts/Option';
import { flow, pipe } from 'fp-ts/function';
import {
	HyperFormula,
	type CellValue,
	type RawCellContent,
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

const fakeData = [...Array(100).keys()].map(() =>
	[...Array(26).keys()].map(() => ''),
);
const fakeInitHF = HyperFormula.buildFromArray(fakeData, HYPER_FORMULA.OPTIONS);

const fakeSerializableSheets = fakeInitHF.getAllSheetsSerialized();
interface FirebaseDoc {
	id: string;
	name: string;
	sheets: string;
}

type Doc = Replace<FirebaseDoc, 'sheets', HyperFormula>;

const fakeFirebaseDoc: FirebaseDoc = {
	id: '0',
	name: 'New Table',
	sheets: JSON.stringify(fakeSerializableSheets),
};
export const docResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
	const ss = inject(SheetsService);
	const docId = route.paramMap.get('docId')!;
	const sheetId = route.paramMap.get('sheetId')!;
	if (docId !== '0') throw new Error('Error retrieving route data.');
	if (!/^\d+$/.test(sheetId)) throw new Error('Invalid sheet Id.');
	ss.initDoc(docId, +sheetId);
};

@Injectable({ providedIn: 'root' })
export class SheetsService {
	doc: Doc | null = null;
	docName = signal('');
	sheetId = 0;
	readonly focusedCell: Cell = { x: 0, y: 0 };
	readonly selectedCells: { min: Cell; max: Cell } = {
		min: { x: -1, y: -1 },
		max: { x: -1, y: -1 },
	};
	readonly selectedRows: Range = { end: -1, start: -1 };
	readonly selectedColumns: Range = { end: -1, start: -1 };
	readonly editingCell: Cell = { x: -1, y: -1 };
	userInput: string | null = null;
	constructor() {
		effect(console.log);
	}

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
				this.userInput = this.parseCellValue(
					hf.getCellValue({ col: 0, row: 0, sheet: sheetId }),
				);
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
				O.fromNullable(this.doc?.sheets.setSheetContent(id, fakeData)),
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
		// const d = this.doc?.sheets.getSheetDimensions(this.currentSheetId);
		// if (!d) return;
		// this.focusedCell.x = 0;
		// this.focusedCell.y = 0;
		// this.setSelectedRows(0, d.height);
		// this.setSelectedColumns(0, d.width);
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

	setSelectedCells(min: Cell, max: Cell) {
		this.selectedCells.min.y = min.y;
		this.selectedCells.min.x = min.x;
		this.selectedCells.max.y = max.y;
		this.selectedCells.max.x = max.x;
	}
	setSelectedCell(x: number, y: number) {
		this.setSelectedCells({ x, y }, { x, y });
	}
	resetSelectedCells() {
		this.selectedCells.min.y = -1;
		this.selectedCells.min.x = -1;
		this.selectedCells.max.y = -1;
		this.selectedCells.max.x = -1;
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
	getParsedCellValue(y: number, x: number) {
		return this.parseCellValue(this.getCellValue(y, x));
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
	getColumnLetter(x: number) {
		return createColumnName(x);
	}
	setCellContent(y: number, x: number, v: RawCellContent) {
		const change = this.doc?.sheets.setCellContents(
			{ col: x, row: y, sheet: this.sheetId },
			v,
		);
		console.log('🚀 ~ SheetsService ~ setCell ~ change:', change);
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
}
