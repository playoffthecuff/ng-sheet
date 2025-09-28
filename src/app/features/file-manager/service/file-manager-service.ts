import { effect, inject, Injectable, signal } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { TuiSortDirection } from '@taiga-ui/addon-table';
import * as E from 'fp-ts/Either';
import { forkJoin, switchMap } from 'rxjs';
import {
	FirestoreService,
	type PaginationDirection,
	type Table,
	type Template,
} from '../../../core/services/firestore/firestore-service';
import { withEither } from '../../../shared/utils/with-either';
import { withLoading } from '../../../shared/utils/with-loading';

export interface TableMetadata {
	name: string;
	createdAt: Date;
	updatedAt: Date;
	id: string;
}

export type TableMetadataKeys = keyof TableMetadata;

export type TableSortKey = Exclude<TableMetadataKeys, 'id'>;

@Injectable({ providedIn: 'root' })
export class FileManagerService {
	private readonly fs = inject(FirestoreService);
	isLoading = signal(false);
	isTemplateLoading = signal(false);
	loadingErrorMessage = signal<string | null>(null);
	totalDocuments = signal<number | null>(null);
	pageDocuments = signal<Table[] | null>(null);
	templates = signal<Template[] | null>(null);
	sortBy = signal<TableSortKey | undefined>(undefined);
	currentPage = signal(0);
	docsPerPage = signal(8);
	searchText = signal('');
	searchBy = signal<TableSortKey>('name');
	sortDirection = signal<TuiSortDirection>(1);
	paginationDirection = signal<PaginationDirection | undefined>(undefined);
	templateLoadingId: string | null = null;

	constructor() {
		effect(() => {
			'load page from fms constructor effect';
			this.currentPage();
			this.loadPage();
		});
		this.loadTemplates();
	}

	private getLoadPageObservable() {
		return forkJoin({
			count: this.fs.getDocsCount(this.searchText(), this.searchBy()),
			docs: this.fs.getDocs(
				this.docsPerPage(),
				this.sortBy(),
				this.sortDirection(),
				this.paginationDirection(),
				this.searchText(),
				this.searchBy(),
			),
		}).pipe(withLoading(this.isLoading.set), withEither(FirebaseError));
	}

	loadPage() {
		this.getLoadPageObservable().subscribe(
			E.match(
				(e) => this.loadingErrorMessage.set(e.message),
				({ count, docs }) => {
					this.totalDocuments.set(count);
					this.pageDocuments.set(docs);
				},
			),
		);
	}

	loadTemplates() {
		this.fs
			.getTemplates()
			.pipe(withLoading(this.isLoading.set), withEither(FirebaseError))
			.subscribe(
				E.match(
					(e) => this.loadingErrorMessage.set(e.message),
					(t) => {
						if (t) this.templates.set(t);
					},
				),
			);
	}

	renameTable(id: string, name: string) {
		this.fs
			.patchDoc({ id, name })
			.pipe(withLoading(this.isLoading.set), withEither(FirebaseError))
			.subscribe(
				E.match(
					(e) => this.loadingErrorMessage.set(e.message),
					() =>
						this.pageDocuments.update(
							(v) => v?.map((v) => (v.id === id ? { ...v, name } : v)) ?? null,
						),
				),
			);
	}

	removeTable(id: string) {
		this.fs
			.deleteDoc(id)
			.pipe(
				withLoading(this.isLoading.set),
				withEither(FirebaseError),
				switchMap(() => this.getLoadPageObservable()),
			)
			.subscribe(
				E.match(
					(e) => this.loadingErrorMessage.set(e.message),
					({ count, docs }) => {
						this.pageDocuments.set(docs);
						this.totalDocuments.set(count);
					},
				),
			);
	}
	removeTemplate(id: string) {
		this.fs
			.deleteDoc(id)
			.pipe(
				switchMap(() => this.fs.getTemplates()),
				withLoading(this.isTemplateLoading.set),
				withEither(FirebaseError),
			)
			.subscribe(
				E.match(
					(e) => this.loadingErrorMessage.set(e.message),
					(t) => {
						if (t) this.templates.set(t);
						this.templateLoadingId = null;
					},
				),
			);
	}
}
