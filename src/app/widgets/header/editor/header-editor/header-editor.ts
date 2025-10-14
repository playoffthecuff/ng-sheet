import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	signal,
	viewChild,
} from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiHintDirective, TuiLoader } from '@taiga-ui/core';
import { TuiInputInline } from '@taiga-ui/kit';
import * as E from 'fp-ts/Either';
import { FirestoreService } from '../../../../core/services/firestore/firestore-service';
import { SheetsService } from '../../../../features/editor/sheets-service/sheets-service';
import { withEither } from '../../../../shared/utils/with-either';
import { withLoading } from '../../../../shared/utils/with-loading';
import { Toolbar } from '../../../toolbar/toolbar';

@Component({
	selector: 'app-header-editor',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		TuiInputInline,
		TuiHintDirective,
		Toolbar,
		TuiLoader,
	],
	templateUrl: './header-editor.html',
	styleUrl: './header-editor.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderEditor {
	private readonly fs = inject(FirestoreService);
	protected readonly ss = inject(SheetsService);
	protected isLoading = signal(false);
	protected errorLoadingMessage = signal('');
	private readonly input =
		viewChild.required<ElementRef<HTMLInputElement>>('input');
	protected renamePhrase = $localize`Rename`;
	protected rename(e: Event) {
		const { value } = e.target as HTMLInputElement;

		if (this.ss.doc) {
			this.fs
				.patchDoc({ id: this.ss.doc.id, name: value })
				.pipe(withLoading(this.isLoading.set), withEither(FirebaseError))
				.subscribe(
					E.match(
						(e) => this.errorLoadingMessage.set(e.message),
						() => {
							if (this.ss.doc) this.ss.doc.name = value;
							this.ss.docName.set(value);
						},
					),
				);
		}
		this.input().nativeElement.blur();
	}
}
