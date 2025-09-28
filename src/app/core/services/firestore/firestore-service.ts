import { inject, Injectable } from '@angular/core';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	DocumentReference,
	endBefore,
	Firestore,
	getCountFromServer,
	getDoc,
	getDocs,
	limit,
	limitToLast,
	orderBy,
	query,
	QueryConstraint,
	QueryDocumentSnapshot,
	startAfter,
	Timestamp,
	updateDoc,
	where,
	type DocumentData,
	type OrderByDirection,
} from '@angular/fire/firestore';
import type { HyperFormula } from 'hyperformula';
import { from, map } from 'rxjs';
import { withUser } from '../../../shared/utils/with-user';
import { AuthService } from '../auth/auth-service';

export interface Template {
	id: string;
	name: string;
}

export interface StoredTable {
	name: string;
	data: string;
	createdAt?: Timestamp;
	updatedAt?: Timestamp;
	isTemplate: boolean;
}
export type Table = Omit<StoredTable, 'createdAt' | 'updatedAt'> & {
	id: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export type SortDirection = -1 | 1;
const transformDirection = (d: SortDirection): OrderByDirection =>
	d === 1 ? 'asc' : 'desc';
export type PaginationDirection = 'forward' | 'backward';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
	private readonly fs = inject(Firestore);
	private readonly as = inject(AuthService);
	startDocSnapshot: QueryDocumentSnapshot<DocumentData, DocumentData> | null =
		null;
	endDocSnapshot: QueryDocumentSnapshot<DocumentData, DocumentData> | null =
		null;
	getDoc(id: string) {
		return this.as.user$.pipe(
			withUser<StoredTable | null>((u) =>
				from(getDoc(doc(this.fs, `users/${u.uid}/tables/${id}`))).pipe(
					map((s) => (s.exists() ? (s.data() as StoredTable) : null)),
				),
			),
		);
	}
	getTemplates() {
		return this.as.user$.pipe(
			withUser((u) => {
				const ref = collection(this.fs, `users/${u.uid}/tables`);
				return from(getDocs(query(ref, where('isTemplate', '==', true)))).pipe(
					map((s) =>
						s.docs.map((d) => ({ id: d.id, name: (d.data() as StoredTable).name })),
					),
				);
			}),
		);
	}
	getDocs(
		docsPerPage = 8,
		sortBy: Exclude<keyof StoredTable, 'data'> = 'updatedAt',
		sortDirection: SortDirection = -1,
		paginationDirection?: PaginationDirection,
		search = '',
		searchBy = 'name',
	) {
		const end = search + '\uf8ff';
		return this.as.user$.pipe(
			withUser((u) => {
				const ref = collection(this.fs, `users/${u.uid}/tables`);
				const constraints: QueryConstraint[] = [
					where(searchBy, '>=', search),
					where(searchBy, '<=', end),
					where('isTemplate', '==', false),
				];
				constraints.push(orderBy(sortBy, transformDirection(sortDirection)));
				if (paginationDirection === 'forward' && this.endDocSnapshot)
					constraints.push(limit(docsPerPage), startAfter(this.endDocSnapshot));
				if (paginationDirection === 'backward' && this.startDocSnapshot)
					constraints.push(
						limitToLast(docsPerPage),
						endBefore(this.startDocSnapshot),
					);
				if (!paginationDirection) constraints.push(limit(docsPerPage));
				return from(getDocs(query(ref, ...constraints))).pipe(
					map((s) =>
						s.docs.map((d, i, a) => {
							if (i === 0) this.startDocSnapshot = d;
							if (i === a.length - 1) this.endDocSnapshot = d;
							const { createdAt, data, name, updatedAt, isTemplate } =
								d.data() as StoredTable;
							return {
								id: d.id,
								name,
								createdAt: createdAt?.toDate(),
								updatedAt: updatedAt?.toDate(),
								data,
								isTemplate,
							};
						}),
					),
				);
			}),
		);
	}
	getDocsCount(search = '', searchBy = 'name') {
		const end = search + '\uf8ff';
		return this.as.user$.pipe(
			withUser<number | null>((u) => {
				const constraints: QueryConstraint[] = [
					where(searchBy, '>=', search),
					where(searchBy, '<=', end),
					where('isTemplate', '==', false),
				];
				return from(
					getCountFromServer(
						query(collection(this.fs, `users/${u.uid}/tables`), ...constraints),
					),
				).pipe(map((s) => s.data().count));
			}),
		);
	}
	postDoc(name: string, sheets: HyperFormula, isTemplate = false) {
		return this.as.user$.pipe(
			withUser<DocumentReference<DocumentData> | null>((u) => {
				const data = JSON.stringify(sheets.getAllSheetsSerialized());
				return from(
					addDoc(collection(this.fs, `users/${u?.uid}/tables`), {
						name,
						data,
						createdAt: new Date(),
						updatedAt: new Date(),
						isTemplate,
					}),
				);
			}),
		);
	}
	patchDoc(p: { id: string; sheets?: HyperFormula; name?: string }) {
		return this.as.user$.pipe(
			withUser((u) => {
				const payload: Partial<StoredTable> = {};
				if (p.name) payload.name = p.name;
				if (p.sheets)
					payload.data = JSON.stringify(p.sheets.getAllSheetsSerialized());
				payload.updatedAt = Timestamp.now();
				return from(
					updateDoc(doc(this.fs, `users/${u.uid}/tables/${p.id}`), payload),
				);
			}),
		);
	}
	deleteDoc(id: string) {
		return this.as.user$.pipe(
			withUser((u) => {
				return from(deleteDoc(doc(this.fs, `users/${u.uid}/tables/${id}`)));
			}),
		);
	}
}
