import type { CanDeactivateFn } from '@angular/router';
import type { Editor } from '../../features/editor/editor';
import { inject } from '@angular/core';
import { SheetsService } from '../../features/editor/sheets-service/sheets-service';
import { of } from 'rxjs';
import { ConfirmDialogService } from '../services/confirm-dialog/confirm-dialog-service';

export const unsavedTableGuard: CanDeactivateFn<Editor> = () => {
	const ss = inject(SheetsService);
	if (ss.isDataSaved) return of(true);
	const dialogService = inject(ConfirmDialogService);
	return dialogService.confirm({
		title: 'Navigation Confirm',
		message:
			'You are leaving the editor, but the current table is not saved. Do you wish to continue?',
		cancelText: 'No',
		okText: 'Yes',
	});
};
