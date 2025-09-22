import { Injectable } from '@angular/core';

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
}

@Injectable()
export class ContextMenuService {
	public readonly menuItem: IMenuItems[] = [
		{ title: menuActions.CutOut, icon: '@tui.scissors', action: 'CutOut' },
		{ title: menuActions.Copy, icon: '@tui.copy', action: 'Copy' },
		{ title: menuActions.Insert, icon: '@tui.clipboard', action: 'Insert' },
		{
			title: menuActions.InsertLineAbove,
			icon: '@tui.plus',
			action: 'InsertLineAbove',
		},
		{
			title: menuActions.InsertColumnLeft,
			icon: '@tui.plus',
			action: 'InsertColumnLeft',
		},
		{ title: menuActions.InsertCells, icon: '@tui.plus', action: 'InsertCells' },
		{ title: menuActions.DeleteLine, icon: '@tui.trash', action: 'DeleteLine' },
		{
			title: menuActions.DeleteColumn,
			icon: '@tui.trash',
			action: 'DeleteColumn',
		},
		{ title: menuActions.DeleteCells, icon: '@tui.trash', action: 'DeleteCells' },
	];

	public cutOut(data: { i: number; j: number }) {
		console.log(data);
	}

	public copy(data: { i: number; j: number }) {
		console.log(data);
	}

	public insert(data: { i: number; j: number }) {
		console.log(data);
	}

	public insertLineAbove(data: { i: number; j: number }) {
		console.log(data);
	}

	public insertColumnLeft(data: { i: number; j: number }) {
		console.log(data);
	}

	public insertCells(data: { i: number; j: number }) {
		console.log(data);
	}

	public deleteLine(data: { i: number; j: number }) {
		console.log(data);
	}

	public deleteColumn(data: { i: number; j: number }) {
		console.log(data);
	}

	public deleteCells(data: { i: number; j: number }) {
		console.log(data);
	}
}
