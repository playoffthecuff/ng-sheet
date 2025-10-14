import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	effect,
	ElementRef,
	inject,
	viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TuiTable } from '@taiga-ui/addon-table';
import {
	TuiDataList,
	TuiDropdown,
	TuiHint,
	// TuiIcon,
	TuiLoader,
} from '@taiga-ui/core';
import { LayoutService } from '../../core/services/layout/layout-service';
import { DataCell } from './data-cell/data-cell';
import { KeyboardService } from './keyboard-service/keyboard-service';
import { SheetsService } from './sheets-service/sheets-service';

@Component({
	selector: 'app-editor',
	imports: [
		TuiTable,
		TuiHint,
		FormsModule,
		TuiLoader,
		TuiDataList,
		TuiDropdown,
		DataCell,
	],
	templateUrl: './editor.html',
	styleUrl: './editor.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { '(keydown)': 'handleKeyDown($event)' },
})
export class Editor {
	private readonly ls = inject(LayoutService);
	private readonly ar = inject(ActivatedRoute);
	private readonly ks = inject(KeyboardService);
	private readonly cdr = inject(ChangeDetectorRef);
	protected readonly ss = inject(SheetsService);

	private readonly table = viewChild<ElementRef<HTMLTableElement>>('table');

	constructor() {
		const id = this.ar.snapshot.paramMap.get('docId');
		if (this.ss.doc && this.ss.doc.id !== id) this.ss.doc.sheets.destroy();
		if (this.ss) this.ls.footerVariant = 'editor';
		this.ls.headerVariant = 'editor';
		effect(() => {
			this.ss.manualEditorUpdateTrigger();
			this.cdr.detectChanges();
		});
	}

	protected handleKeyDown(e: KeyboardEvent) {
		if (e.key === ' ' && !this.ss.isEditing) e.preventDefault();
		if (!e.shiftKey && this.ks.isMatchTableArrows(e.key) && !this.ss.isEditing) {
			e.preventDefault();
			this.ss.resetSelectedCells();
			this.ks.tableMaps.arrows[e.key as keyof typeof this.ks.tableMaps.arrows]();
			this.ss.updateUserInput();
			this.ss.firstTypedSign = '';
		}
		if (e.shiftKey && this.ks.isMatchTableArrows(e.key) && !this.ss.isEditing) {
			if (!this.ss.isSelected)
				this.ss.setSelectedCell(this.ss.focusedCell.x, this.ss.focusedCell.y);
			this.ks.tableMaps.shift.arrows[
				e.key as keyof typeof this.ks.tableMaps.shift.arrows
			]();
			this.ss.firstTypedSign = '';
		}
		if (this.ks.isMatchTableOther(e.key)) {
			this.ks.tableMaps.other[e.key as keyof typeof this.ks.tableMaps.other]();
			this.ss.updateUserInput();
			this.ss.firstTypedSign = '';
			this.table()?.nativeElement.focus();
		}
		if (
			!this.ks.isMatchTableArrows(e.key) &&
			!this.ks.isMatchTableOther(e.key) &&
			!e.altKey &&
			!e.ctrlKey &&
			e.key.length === 1
		) {
			if (!this.ss.isEditing) {
				this.ss.userInput = e.key;
				this.ss.editingCell.x = this.ss.focusedCell.x;
				this.ss.editingCell.y = this.ss.focusedCell.y;
				this.ss.firstTypedSign = e.key;
			} else {
				this.ss.firstTypedSign = '';
			}
		}
		if (e.ctrlKey && this.ks.isMatchTableCtrl(e.key))
			this.ks.tableMaps.ctrl[e.key as keyof typeof this.ks.tableMaps.ctrl]();
	}
}
