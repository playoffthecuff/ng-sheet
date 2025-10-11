import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal,
} from '@angular/core';
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
import { Divider } from '../../shared/ui/divider/divider';
import { withEither } from '../../shared/utils/with-either';
import { withLoading } from '../../shared/utils/with-loading';

@Component({
	selector: 'app-toolbar',
	imports: [TuiButton, TuiHintDirective, TuiButtonLoading, Divider],
	templateUrl: './toolbar.html',
	styleUrl: './toolbar.less',
	host: { '(document:keydown)': 'handleKeydown($event)' },
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toolbar {
	private readonly fs = inject(FirestoreService);
	private readonly fms = inject(FileManagerService);
	private readonly r = inject(Router);
	protected readonly ss = inject(SheetsService);

	protected readonly isLoading = signal(false);
	protected readonly isTemplateLoading = signal(false);

	protected savingErrorMessage: string | null = null;
	protected defaultSaveTablePhrase = $localize`Save Table (Ctrl+S)`;
	protected defaultSaveTemplatePhrase = $localize`Save as Template (Ctrl+Shift+S)`;
	protected createAnEmptyTablePhrase = $localize`Create an empty table (Ctrl+N)`;
	protected undoPhrase = $localize`Undo (Ctrl+Z)`;
	protected redoPhrase = $localize`Redo (Ctrl+Y)`;

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
	protected undo() {
		if (this.ss.doc?.sheets.isThereSomethingToUndo()) {
			this.ss.doc?.sheets.undo();
			this.ss.manualUpdateTrigger.update((v) => !v);
		}
	}
	protected redo() {
		if (this.ss.doc?.sheets.isThereSomethingToRedo()) {
			this.ss.doc?.sheets.redo();
			this.ss.manualUpdateTrigger.update((v) => !v);
		}
	}
	protected handleKeydown(e: KeyboardEvent) {
		if (e.ctrlKey) {
			e.preventDefault();
			if (e.key === 's') this.trySave();
			if (e.key === 'S') this.trySave(e.shiftKey);
			if (e.key === 'z') this.undo();
			if (e.key === 'y') this.redo();
		}
		if (e.altKey && e.key === 'n') this.createNewTable();
	}
}
