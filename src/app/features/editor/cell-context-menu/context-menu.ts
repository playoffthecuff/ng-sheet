import { Component, inject, input } from '@angular/core';
import { TuiDataList, TuiDropdown } from '@taiga-ui/core';
import { TuiDataListDropdownManager } from '@taiga-ui/kit';
import { SheetsService } from '../sheets-service/sheets-service';

type MenuActions =
	| 'cut'
	| 'copy'
	| 'paste'
	| 'insertRowAbove'
	| 'insertColumnLeft'
	| 'insertCellDown'
	| 'insertCellRight'
	| 'deleteRow'
	| 'deleteColumn'
	| 'deleteCellUp'
	| 'deleteCellLeft';

interface MenuItem {
	title: string;
	icon: string;
	action?: MenuActions;
	children?: MenuItem[];
}

@Component({
	selector: 'app-context-menu',
	standalone: true,
	imports: [TuiDataList, TuiDropdown, TuiDataList, TuiDataListDropdownManager],
	templateUrl: './context-menu.html',
	styleUrl: './context-menu.less',
})
export class ContextMenu {
	data = input<{ i: number; j: number } | undefined>(undefined);
	close = input<(() => void) | undefined>(undefined);
	private readonly ss = inject(SheetsService);
	private readonly actions = {
		cut: () => this.ss.cutToClipboard(),
		copy: () => this.ss.copyToClipboard(),
		paste: () => this.ss.pasteFromClipboard(),
		insertRowAbove: (y: number) => this.ss.addEmptyRows(y, 1),
		insertColumnLeft: (_: number, x: number) => this.ss.addEmptyColumns(x, 1),
		insertCellDown: (y: number, x: number) =>
			this.ss.addEmptyCell(y, x, 'bottom'),
		insertCellRight: (y: number, x: number) =>
			this.ss.addEmptyCell(y, x, 'right'),
		deleteRow: (y: number) => this.ss.removeRows(y, 1),
		deleteColumn: (_: number, x: number) => this.ss.removeColumns(x, 1),
		deleteCellUp: (y: number, x: number) => this.ss.removeCell(y, x, 'up'),
		deleteCellLeft: (y: number, x: number) => this.ss.removeCell(y, x, 'left'),
	};
	readonly items: MenuItem[] = [
		{ title: 'Cut', icon: '@tui.scissors', action: 'cut' },
		{ title: 'Copy', icon: '@tui.copy', action: 'copy' },
		{ title: 'Paste', icon: '@tui.clipboard', action: 'paste' },
		{ title: 'Insert row above', icon: '@tui.plus', action: 'insertRowAbove' },
		{
			title: 'Insert column left',
			icon: '@tui.plus',
			action: 'insertColumnLeft',
		},
		{
			title: 'Insert cell',
			icon: '@tui.plus',
			children: [
				{
					title: 'and shift down',
					icon: '@tui.arrow-down',
					action: 'insertCellDown',
				},
				{
					title: 'and shift right',
					icon: '@tui.arrow-right',
					action: 'insertCellRight',
				},
			],
		},

		{ title: 'Delete row', icon: '@tui.trash-2', action: 'deleteRow' },
		{ title: 'Delete column', icon: '@tui.trash-2', action: 'deleteColumn' },

		{
			title: 'Delete cell',
			icon: '@tui.trash-2',
			children: [
				{ title: 'and shift up', icon: '@tui.arrow-up', action: 'deleteCellUp' },
				{
					title: 'and shift left',
					icon: '@tui.arrow-left',
					action: 'deleteCellLeft',
				},
			],
		},
	];

	onAction(a?: MenuActions) {
		const d = this.data();
		const c = this.close();
		if (!d || !c || !a) return;
		this.actions[a](d.i, d.j);
		this.close();
	}
}
