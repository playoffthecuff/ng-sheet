import {
	ChangeDetectionStrategy,
	Component,
	inject,
	input,
} from '@angular/core';
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenu {
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
		{ title: $localize`Cut`, icon: '@tui.scissors', action: 'cut' },
		{ title: $localize`Copy`, icon: '@tui.copy', action: 'copy' },
		{ title: $localize`Paste`, icon: '@tui.clipboard', action: 'paste' },
		{
			title: $localize`Insert row above`,
			icon: '@tui.plus',
			action: 'insertRowAbove',
		},
		{
			title: $localize`Insert column left`,
			icon: '@tui.plus',
			action: 'insertColumnLeft',
		},
		{
			title: $localize`Insert cell`,
			icon: '@tui.plus',
			children: [
				{
					title: $localize`and shift down`,
					icon: '@tui.arrow-down',
					action: 'insertCellDown',
				},
				{
					title: $localize`and shift right`,
					icon: '@tui.arrow-right',
					action: 'insertCellRight',
				},
			],
		},

		{ title: $localize`Delete row`, icon: '@tui.trash-2', action: 'deleteRow' },
		{
			title: $localize`Delete column`,
			icon: '@tui.trash-2',
			action: 'deleteColumn',
		},

		{
			title: $localize`Delete cell`,
			icon: '@tui.trash-2',
			children: [
				{
					title: $localize`and shift up`,
					icon: '@tui.arrow-up',
					action: 'deleteCellUp',
				},
				{
					title: $localize`and shift left`,
					icon: '@tui.arrow-left',
					action: 'deleteCellLeft',
				},
			],
		},
	];

	onAction(a?: MenuActions) {
		const { x, y } = this.ss.focusedCell;
		const c = this.close();
		if (x === -1 || y === -1 || !c || !a) return;
		this.actions[a](y, x);
		this.close();
	}
}
