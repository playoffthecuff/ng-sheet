import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
	TuiTable,
	TuiTablePagination,
	type TuiSortChange,
	type TuiTablePaginationEvent,
} from '@taiga-ui/addon-table';
import {
	TuiButton,
	TuiDataListComponent,
	TuiDialogService,
	TuiDropdown,
	TuiHint,
	TuiHintDirective,
	TuiIcon,
	TuiLoader,
	TuiTextfield,
	TuiTitle,
	type TuiDialogContext,
} from '@taiga-ui/core';
import { TuiButtonClose, TuiInputInline, TuiInputNumber } from '@taiga-ui/kit';
import { type PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { Subscription } from 'rxjs';
import { BlurDirective } from '../../shared/directives/blur/blur-directive';
import { SetFocusDirective } from '../../shared/directives/set-focus/set-focus-directive';
import {
	FileManagerService,
	type TableSortKey,
} from './service/file-manager-service';
@Component({
	selector: 'app-file-manager',
	imports: [
		TuiButton,
		TuiHint,
		TuiHintDirective,
		FormsModule,
		ReactiveFormsModule,
		TuiDropdown,
		TuiInputNumber,
		TuiLoader,
		TuiTable,
		TuiTablePagination,
		TuiTextfield,
		DatePipe,
		TuiDataListComponent,
		RouterLink,
		TuiIcon,
		TuiInputInline,
		BlurDirective,
		SetFocusDirective,
		TuiTitle,
		TuiButtonClose,
	],
	templateUrl: './file-manager.html',
	styleUrl: './file-manager.less',
})
export class FileManager {
	private readonly r = inject(Router);
	protected readonly fms = inject(FileManagerService);
	private readonly dialogs = inject(TuiDialogService);
	private dialogSubscription: Subscription | null = null;

	protected readonly columns = ['name', 'createdAt', 'updatedAt', 'id'] as const;
	protected readonly isLoading = this.fms.isLoading;

	protected changingNameIndex = -1;
	protected showEmptyNameHint = false;

	protected openEditorWithEmptyTable() {
		this.r.navigate(['editor', 0, 0]);
	}
	protected openEditorWithTemplate(id: string) {
		this.r.navigate(['editor', id]);
	}
	protected change(e: TuiSortChange<never>) {
		this.fms.paginationDirection.set(undefined);
		this.fms.currentPage.set(0);
		this.fms.sortBy.set(e.sortKey as TableSortKey);
		this.fms.sortDirection.set(e.sortDirection);
	}
	protected onPagination(e: TuiTablePaginationEvent) {
		this.fms.currentPage.update((prev) => {
			if (prev < e.page) this.fms.paginationDirection.set('forward');
			if (prev > e.page) this.fms.paginationDirection.set('backward');
			return e.page;
		});
		if (e.size !== this.fms.docsPerPage()) {
			this.fms.currentPage.set(0);
			this.fms.docsPerPage.set(e.size);
		}
	}
	protected startEditTableName(i: number) {
		this.changingNameIndex = i;
	}
	protected endEditTableName(e: FocusEvent) {
		const v = (e.target as HTMLInputElement).value;
		if (!v) this.showEmptyNameHint = true;
		else {
			this.showEmptyNameHint = false;
			this.changingNameIndex = -1;
		}
	}
	protected renameTable(e: Event, id: string) {
		const v = (e.target as HTMLInputElement).value;
		if (v) {
			this.changingNameIndex = -1;
			this.fms.renameTable(id, (e.target as HTMLInputElement).value);
		}
	}
	protected openTable(id: string) {
		this.r.navigate(['editor', id]);
	}
	protected removeTemplate(id: string) {
		this.fms.templateLoadingId = id;
		this.fms.removeTemplate(id);
		this.closeRemoveTableDialog();
	}
	protected removeTable(id: string) {
		this.fms.removeTable(id);
		this.closeRemoveTableDialog();
	}
	protected stopPropagation(e: PointerEvent) {
		e.stopPropagation();
	}
	protected openRemoveTableDialog(
		content: PolymorpheusContent<TuiDialogContext>,
		e?: PointerEvent,
	) {
		e?.stopPropagation();
		this.dialogSubscription = this.dialogs.open(content).subscribe();
	}
	protected closeRemoveTableDialog() {
		this.dialogSubscription?.unsubscribe();
	}
	constructor() {
		this.fms.currentPage.set(0);
		this.fms.paginationDirection.set(undefined);
		this.fms.sortDirection.set(1);
		this.fms.searchText.set('');
	}
}
