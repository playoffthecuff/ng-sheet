import { inject, Injectable } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { type Observable } from 'rxjs';
import { ConfirmDialog } from '../../../shared/ui/confirm-dialog/confirm-dialog';

export interface ConfirmDialogData {
	title: string;
	message: string;
	okText?: string;
	cancelText?: string;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
	private readonly component = new PolymorpheusComponent(ConfirmDialog);
	private readonly dialogs = inject(TuiDialogService);
	confirm(data: ConfirmDialogData): Observable<boolean> {
		return this.dialogs.open<boolean>(this.component, {
			size: 's',
			data,
			dismissible: false,
			closeable: false,
		});
	}
}
