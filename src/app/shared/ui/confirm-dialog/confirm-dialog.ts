import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAutoFocus } from '@taiga-ui/cdk';
import { TuiButton, type TuiDialogContext } from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';

@Component({
	selector: 'app-confirm-dialog',
	imports: [TuiButton, TuiAutoFocus],
	templateUrl: './confirm-dialog.html',
	styleUrl: './confirm-dialog.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
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
