import { Component } from '@angular/core';
import { TuiButton, type TuiDialogContext } from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiAutoFocus } from '@taiga-ui/cdk';

@Component({
	selector: 'app-confirm-dialog',
	imports: [TuiButton, TuiAutoFocus],
	templateUrl: './confirm-dialog.html',
	styleUrl: './confirm-dialog.less',
})
export class ConfirmDialog {
	readonly context =
		injectContext<
			TuiDialogContext<
				boolean,
				{ title: string; message: string; okText?: string; cancelText?: string }
			>
		>();
}
