import { inject } from '@angular/core';
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { HYPER_FORMULA } from '../../../shared/constants/hyperformula';
import { SheetsService } from './sheets-service';

import { FirebaseError } from '@angular/fire/app';
import * as E from 'fp-ts/Either';
import { HyperFormula, type RawCellContent } from 'hyperformula';
import { map } from 'rxjs';
import { FirestoreService } from '../../../core/services/firestore/firestore-service';
import type { Replace } from '../../../shared/utils/types';
import { withEither } from '../../../shared/utils/with-either';
import { withLoading } from '../../../shared/utils/with-loading';

export const emptySheetData = [...Array(100).keys()].map(() =>
	[...Array(26).keys()].map(() => ''),
);
export const emptyTable = HyperFormula.buildFromArray(
	emptySheetData,
	HYPER_FORMULA.OPTIONS,
);

export const emptySerializedTable = emptyTable.getAllSheetsSerialized();
interface FirebaseDoc {
	id: string;
	name: string;
	sheets: string;
}

export type Doc = Replace<FirebaseDoc, 'sheets', HyperFormula>;

export const docResolver: ResolveFn<void> = (route: ActivatedRouteSnapshot) => {
	const ss = inject(SheetsService);
	const fs = inject(FirestoreService);
	const docId = route.paramMap.get('docId')!;
	const sheetId = route.paramMap.get('sheetId');
	if (sheetId && !/^\d+$/.test(sheetId)) throw new Error('Invalid sheet Id.');
	if (docId === '0') {
		ss.initDoc('0', $localize`New Table`, 0, emptySerializedTable);
	} else {
		return fs.getDoc(docId).pipe(
			withLoading(ss.isLoading.set),
			withEither(FirebaseError),
			map(
				E.match(
					(e) => ss.loadingErrorMessage.set(e.message),
					(d) => {
						if (d) {
							const sheets: Record<string, RawCellContent[][]> = JSON.parse(
								d.data,
								(_, v) =>
									typeof v === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(v) ?
										new Date(v)
									:	v,
							);
							const dsid = sheetId ? +sheetId : null;
							ss.initDoc(docId, d.name, dsid ?? 0, sheets);
						} else {
							throw new Error(
								`The document with the requested id ${docId} does not exist.`,
							);
						}
					},
				),
			),
		);
	}
	return void 0;
};
