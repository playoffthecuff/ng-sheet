import { inject, Injectable } from '@angular/core';
import { SheetsService } from '../../sheets-service/sheets-service';

export const menuActions = {
	CutOut: 'Вырезать',
	Copy: 'Копировать',
	Insert: 'Вставить',
	InsertLineAbove: 'Вставить строку выше',
	InsertColumnLeft: 'Вставить столбец слева',
	InsertCells: 'Вставить ячейки',
	DeleteLine: 'Удалить строку',
	DeleteColumn: 'Удалить столбец',
	DeleteCells: 'Удалить ячейки',
} as const;

export type MenuTitle = (typeof menuActions)[keyof typeof menuActions];
export type MenuActions = keyof typeof menuActions;

export interface IMenuItems {
	title: MenuTitle;
	icon: string;
	action: MenuActions;
	expand: string;
	children?: { label: string; direction: 'right' | 'bottom' | 'left' | 'up' }[];
}

export interface IActionHandlerPayload {
	i: number;
	j: number;
}

@Injectable()
export class ContextMenuService {
	private sheetsService: SheetsService = inject(SheetsService);

	public readonly menuItem: IMenuItems[] = [
		{
			title: menuActions.CutOut,
			icon: '@tui.scissors',
			action: 'CutOut',
			expand: 'Ctrl+X',
		},
		{
			title: menuActions.Copy,
			icon: '@tui.copy',
			action: 'Copy',
			expand: 'Ctrl+C',
		},
		{
			title: menuActions.Insert,
			icon: '@tui.clipboard',
			action: 'Insert',
			expand: 'Ctrl+V',
		},
		{
			title: menuActions.InsertLineAbove,
			icon: '@tui.plus',
			action: 'InsertLineAbove',
			expand: '',
		},
		{
			title: menuActions.InsertColumnLeft,
			icon: '@tui.plus',
			action: 'InsertColumnLeft',
			expand: '',
		},
		{
			title: menuActions.InsertCells,
			icon: '@tui.plus',
			action: 'InsertCells',
			expand: '>',
			children: [
				{ label: 'Вставить, сдвинув ячейки вправо', direction: 'right' },
				{ label: 'Вставить, сдвинув ячейки вниз', direction: 'bottom' },
			],
		},
		{
			title: menuActions.DeleteLine,
			icon: '@tui.trash',
			action: 'DeleteLine',
			expand: '',
		},
		{
			title: menuActions.DeleteColumn,
			icon: '@tui.trash',
			action: 'DeleteColumn',
			expand: '',
		},
		{
			title: menuActions.DeleteCells,
			icon: '@tui.trash',
			action: 'DeleteCells',
			expand: '>',
			children: [
				{ label: 'Удалить, сдвинув ячейки влево', direction: 'left' },
				{ label: 'Удалить, сдвинув ячейки вверх', direction: 'up' },
			],
		},
	];

	public onAction(
		action: MenuActions,
		data: IActionHandlerPayload | undefined,
		close: (() => void) | undefined,
	) {
		if (!data || !close) return;

		const { i, j } = data;

		switch (action) {
			case 'CutOut':
				this.sheetsService.cutToClipboard();
				break;

			case 'Copy':
				this.sheetsService.copyToClipboard();
				break;

			case 'Insert':
				this.sheetsService.pasteFromClipboard();
				break;

			case 'InsertLineAbove':
				this.sheetsService.addEmptyRows(i, 1);
				break;

			case 'InsertColumnLeft':
				this.sheetsService.addEmptyColumns(j, 1);
				break;

			case 'DeleteLine':
				this.sheetsService.removeRows(i, 1);
				break;

			case 'DeleteColumn':
				this.sheetsService.removeColumns(j, 1);
				break;
		}

		close();
	}

	public onNestedAction(
		action: MenuActions,
		direction: 'right' | 'bottom' | 'left' | 'up',
		data: IActionHandlerPayload | undefined,
		close: (() => void) | undefined,
	): void {
		if (!data || !close) return;

		const { i, j } = data;

		if (action === 'InsertCells') {
			this.sheetsService.addEmptyCell(i, j, direction as 'bottom' | 'right');
		}

		if (action === 'DeleteCells') {
			this.sheetsService.removeCell(i, j, direction as 'up' | 'left');
		}

		close();
	}
}
