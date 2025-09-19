import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputInline } from '@taiga-ui/kit';
import { SheetsService } from '../../../../features/editor/sheets-service/sheets-service';
import { TuiHintDirective } from '@taiga-ui/core';

@Component({
	selector: 'app-header-editor',
	imports: [FormsModule, ReactiveFormsModule, TuiInputInline, TuiHintDirective],
	templateUrl: './header-editor.html',
	styleUrl: './header-editor.less',
})
export class HeaderEditor {
	ss = inject(SheetsService);
	empty = '';
}
