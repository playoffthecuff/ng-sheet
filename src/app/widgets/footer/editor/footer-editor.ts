import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButton, TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { TuiSegmented, TuiTooltip } from '@taiga-ui/kit';
import { SheetsService } from '../../../features/editor/sheets-service';

@Component({
	selector: 'app-footer-editor',
	imports: [
		TuiIcon,
		TuiDropdown,
		TuiButton,
		TuiTooltip,
		RouterLink,
		RouterLinkActive,
		TuiSegmented,
		TuiDataList,
	],
	templateUrl: './footer-editor.html',
	styleUrl: './footer-editor.less',
})
export class FooterEditor {
	private readonly r = inject(Router);
	protected ss = inject(SheetsService);
	navigateToSheet(id: string) {
		this.r.navigateByUrl(`/editor/${1}/${id}`);
	}
	prevent(e: PointerEvent) {
		e.preventDefault();
	}
}
