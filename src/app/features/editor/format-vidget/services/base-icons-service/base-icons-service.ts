import { inject, Injectable, signal, type WritableSignal } from '@angular/core';
import { SheetsService } from '../../../sheets-service/sheets-service';

export const buttonsActions = {
	cancel: 'Отменить (Ctrl+Z)',
	repeat: 'Повторить (Ctrl+Y)',
	copyFormating: 'Копировать форматирование',
	decimalsLeft: 'Уменьшить число знаков после запятой',
	decimalsRight: 'Увеличить число знаков после запятой',
	bold: 'Полужирный (Ctrl+B)',
	italic: 'Курсив (Ctrl+I)',
	crossedOut: 'Зачёркнутый (Alt+Shift+5)',
} as const;

export type ButtonHint = (typeof buttonsActions)[keyof typeof buttonsActions];
export type ButtonAnchor = keyof typeof buttonsActions;

export interface IbuttonsOption {
	icon: string;
	action: ButtonAnchor;
	hint: ButtonHint;
	checked?: boolean;
}

@Injectable()
export class BaseIconsService {
	public k: SheetsService = inject(SheetsService);

	public buttonsOptions: WritableSignal<IbuttonsOption[]> = signal<
		IbuttonsOption[]
	>([
		{ icon: '@tui.undo-2', action: 'cancel', hint: buttonsActions.cancel },
		{ icon: '@tui.redo-2', action: 'repeat', hint: buttonsActions.repeat },
		{
			icon: '@tui.paint-roller',
			action: 'copyFormating',
			hint: buttonsActions.copyFormating,
			checked: false,
		},
		{
			icon: '@tui.decimals-arrow-left',
			action: 'decimalsLeft',
			hint: buttonsActions.decimalsLeft,
		},
		{
			icon: '@tui.decimals-arrow-right',
			action: 'decimalsRight',
			hint: buttonsActions.decimalsRight,
		},
		{
			icon: '@tui.bold',
			action: 'bold',
			hint: buttonsActions.bold,
			checked: false,
		},
		{
			icon: '@tui.italic',
			action: 'italic',
			hint: buttonsActions.italic,
			checked: false,
		},
		{
			icon: '@tui.link-2-off',
			action: 'crossedOut',
			hint: buttonsActions.crossedOut,
			checked: false,
		},
	]);

	public onAction(action: ButtonAnchor) {
		if (!action) return;

		switch (action) {
			case 'cancel':
				//
				break;

			case 'repeat':
				//
				break;

			case 'copyFormating':
				//
				break;

			case 'decimalsLeft':
				//
				break;

			case 'decimalsRight':
				//
				break;

			case 'bold':
				//
				break;

			case 'italic':
				//
				break;

			case 'crossedOut':
				//
				break;
		}

		this.toggleButtonState(action);
	}

	public toggleButtonState(action: ButtonAnchor) {
		const updatedButtonOptions = this.buttonsOptions().map(
			(item: IbuttonsOption) =>
				'checked' in item && item.action === action ?
					{ ...item, checked: !item.checked }
				:	item,
		);

		this.buttonsOptions.set(updatedButtonOptions);
	}
}
