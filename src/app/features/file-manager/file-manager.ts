import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiButton, TuiHintDirective } from '@taiga-ui/core';
import { SheetsService } from '../editor/sheets-service/sheets-service';

@Component({
	selector: 'app-file-manager',
	imports: [TuiButton, TuiHintDirective],
	templateUrl: './file-manager.html',
	styleUrl: './file-manager.less',
})
export class FileManager {
	private readonly ss = inject(SheetsService);
	private readonly r = inject(Router);
	createTable() {
		const docId = crypto.randomUUID();
		this.ss.initDoc(docId, 0);
		this.r.navigate(['editor', docId, 0]);
	}
}
