import { inject, Injectable } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { createColumnName } from '../../shared/utils/create-column-name';

const columnIndexes = [...Array(26).keys()];
const columns = columnIndexes.map((i) => createColumnName(i + 1));
const fakeData = [...Array(100).keys()].map((i) =>
	columns.map((v) => v + (i + 1)),
);
const fakeSheet: Sheet = { data: fakeData, name: 'Sheet 0', id: '0' };
const fakeSheets: Sheet[] = [{ data: fakeData, name: 'Sheet 0', id: '0' }];
const fakeSheetMetadata: SheetMetadata = { id: '0', name: 'Sheet 0' };
const fakeDoc: DocMetadata = {
	id: '1',
	name: 'Doc 1',
	sheetsMetadata: [fakeSheetMetadata],
};

export const sheetResolver: ResolveFn<void> = (
	route: ActivatedRouteSnapshot,
) => {
	const ss = inject(SheetsService);
	const sheetId = route.paramMap.get('sheetId')!;
	ss.loadSheet(sheetId);
};
export interface DocMetadata {
	id: string;
	name: string;
	sheetsMetadata: SheetMetadata[];
}

export const docResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
	const ss = inject(SheetsService);
	const docId = route.paramMap.get('docId')!;
	ss.loadDoc(docId);
};

export interface SheetMetadata {
	id: string;
	name: string;
}

export interface Sheet {
	id: string;
	name: string;
	data: string[][];
}

@Injectable({ providedIn: 'root' })
export class SheetsService {
	docMetadata: DocMetadata | null = null;
	sheet: Sheet | null = null;
	readonly columnIndexes = [...Array(26).keys()];
	readonly columns = this.columnIndexes.map((i) => createColumnName(i + 1));
	readonly data = [...Array(100).keys()].map((i) =>
		this.columns.map((v) => v + (i + 1)),
	);

	addSheet() {
		const id = `${this.docMetadata?.sheetsMetadata?.length ?? 0}`;
		const name = `Sheet ${id}`;
		const newSheet = { name, id };
		fakeSheets.push({ id, name, data: fakeData });
		fakeDoc.sheetsMetadata.push(newSheet);
	}

	loadDoc(id: string) {
		if (id) this.docMetadata = fakeDoc;
	}

	loadSheet(id: string) {
		this.sheet = fakeSheets.find((v) => v.id === id) ?? fakeSheet;
	}
}
