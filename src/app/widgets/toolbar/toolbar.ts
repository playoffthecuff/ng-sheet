import { Component, inject, signal } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { Router } from '@angular/router';
import { TuiButton, TuiHintDirective } from '@taiga-ui/core';
import { TuiButtonLoading } from '@taiga-ui/kit';
import * as E from 'fp-ts/Either';
import { FirestoreService } from '../../core/services/firestore/firestore-service';
import {
	emptySerializedTable,
	type Doc,
} from '../../features/editor/sheets-service/doc-resolver';
import { SheetsService } from '../../features/editor/sheets-service/sheets-service';
import { FileManagerService } from '../../features/file-manager/service/file-manager-service';
import { withEither } from '../../shared/utils/with-either';
import { withLoading } from '../../shared/utils/with-loading';

@Component({
	selector: 'app-toolbar',
	imports: [TuiButton, TuiHintDirective, TuiButtonLoading],
	templateUrl: './toolbar.html',
	styleUrl: './toolbar.less',
})
export class Toolbar {
	private readonly fs = inject(FirestoreService);
	private readonly fms = inject(FileManagerService);
	private readonly r = inject(Router);
	protected readonly ss = inject(SheetsService);
	protected readonly isLoading = signal(false);
	protected readonly isTemplateLoading = signal(false);
	savingErrorMessage: string | null = null;
	protected defaultSaveTablePhrase = $localize`Save Table`;
	protected defaultSaveTemplatePhrase = $localize`Save as Template`;
	protected createAnEmptyTablePhrase = $localize`Create an empty table`;
	protected trySave(isTemplate = false) {
		const { doc, isDataSaved } = this.ss;
		if (!doc || isDataSaved) return;
		this.saveDoc(doc, isTemplate);
	}
	private getPostDocObservable(doc: Doc, isTemplate = false) {
		return this.fs
			.postDoc(doc.name, doc.sheets, isTemplate)
			.pipe(
				withLoading(isTemplate ? this.isTemplateLoading.set : this.isLoading.set),
				withEither(FirebaseError),
			);
	}
	private getPatchDocObservable(doc: Doc, isTemplate = false) {
		return this.fs
			.patchDoc(doc)
			.pipe(
				withLoading(isTemplate ? this.isTemplateLoading.set : this.isLoading.set),
				withEither(FirebaseError),
			);
	}
	private saveDoc(doc: Doc, isTemplate = false) {
		if (doc.id === '0')
			this.getPostDocObservable(doc, isTemplate).subscribe(
				E.match(
					(e) => (this.savingErrorMessage = e.message),
					() => {
						this.ss.isDataSaved = true;
						this.savingErrorMessage = null;
						this.fms.loadPage();
						if (isTemplate) this.fms.loadTemplates();
					},
				),
			);
		else
			this.getPatchDocObservable(doc)
				.pipe(withLoading(this.isLoading.set), withEither(FirebaseError))
				.subscribe(
					E.match(
						(e) => (this.savingErrorMessage = e.message),
						() => {
							this.ss.isDataSaved = true;
							this.savingErrorMessage = null;
							this.fms.loadPage();
						},
					),
				);
	}
	private startWithNewTable(docId: string) {
		const { sheetId } = this.ss;
		if (docId === '0' && sheetId === 0)
			this.ss.initDoc('0', $localize`New Table`, 0, emptySerializedTable);
		else this.r.navigate(['editor', 0, 0]);
		this.ss.docName.set($localize`New Table`);
	}
	protected createNewTable() {
		const { doc } = this.ss;
		if (!doc) return;
		if (this.ss.isDataSaved) {
			this.startWithNewTable(doc.id);
		} else {
			if (doc.id === '0')
				this.getPostDocObservable(doc).subscribe(
					E.match(
						(e) => (this.savingErrorMessage = e.message),
						() => {
							this.startWithNewTable(doc.id);
							this.ss.isDataSaved = true;
							this.savingErrorMessage = null;
							this.fms.loadPage();
						},
					),
				);
			else
				this.getPostDocObservable(doc).subscribe(
					E.match(
						(e) => (this.savingErrorMessage = e.message),
						() => {
							this.startWithNewTable(doc.id);
							this.ss.isDataSaved = true;
							this.savingErrorMessage = null;
							this.fms.loadPage();
						},
					),
				);
		}
	}
}
