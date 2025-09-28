import { Injectable } from '@angular/core';

export const menuActions = {
	cut: 'Cut',
	copy: 'Copy',
	paste: 'Paste',
	insertRowAbove: 'Insert row above',
	insertColumnLeft: 'Insert column left',
	insertCells: 'Paste cells',
	deleteRow: 'delete row',
	deleteColumn: 'delete column',
	deleteCells: 'delete cells',
} as const;

export type MenuTitle = (typeof menuActions)[keyof typeof menuActions];
export type MenuActions = keyof typeof menuActions;

export interface MenuItems {
	title: MenuTitle;
	icon: string;
	action: MenuActions;
}

@Injectable()
export class ContextMenuService {
	public readonly menuItem: MenuItems[] = [
		{ title: menuActions.cut, icon: '@tui.scissors', action: 'cut' },
		{ title: menuActions.copy, icon: '@tui.copy', action: 'copy' },
		{ title: menuActions.paste, icon: '@tui.clipboard', action: 'paste' },
		{
			title: menuActions.insertRowAbove,
			icon: '@tui.plus',
			action: 'insertRowAbove',
		},
		{
			title: menuActions.insertColumnLeft,
			icon: '@tui.plus',
			action: 'insertColumnLeft',
		},
		{ title: menuActions.insertCells, icon: '@tui.plus', action: 'insertCells' },
		{ title: menuActions.deleteRow, icon: '@tui.trash-2', action: 'deleteRow' },
		{
			title: menuActions.deleteColumn,
			icon: '@tui.trash-2',
			action: 'deleteColumn',
		},
		{
			title: menuActions.deleteCells,
			icon: '@tui.trash-2',
			action: 'deleteCells',
		},
	];

	public cut(data: { i: number; j: number }) {
		console.log(data);
	}

	public copy(data: { i: number; j: number }) {
		console.log(data);
	}

	public paste(data: { i: number; j: number }) {
		console.log(data);
	}

	public insertRowAbove(data: { i: number; j: number }) {
		console.log(data);
	}

	public insertColumnLeft(data: { i: number; j: number }) {
		console.log(data);
	}

	public insertCells(data: { i: number; j: number }) {
		console.log(data);
	}

	public deleteRow(data: { i: number; j: number }) {
		console.log(data);
	}

	public deleteColumn(data: { i: number; j: number }) {
		console.log(data);
	}

	public deleteCells(data: { i: number; j: number }) {
		console.log(data);
	}
}
