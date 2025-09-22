import {
	ChangeDetectionStrategy,
	Component,
	inject,
	Input,
} from '@angular/core';
import { TuiDataList, TuiIcon } from '@taiga-ui/core';
import {
	ContextMenuService,
	type MenuActions,
} from '../context-menu-service/context-menu-service';

@Component({
	selector: 'app-context-menu',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TuiIcon, TuiDataList],
	templateUrl: './context-menu.html',
	styleUrl: './context-menu.less',
})
export class ContextMenu {
	@Input() data: { i: number; j: number } | undefined;
	@Input() close: (() => void) | undefined;

	public contextMenuService: ContextMenuService = inject(ContextMenuService);

	public onAction(action: MenuActions) {
		if (!this.data || !this.close) return;

		switch (action) {
			case 'CutOut':
				this.contextMenuService.cutOut(this.data);
				break;

			case 'Copy':
				this.contextMenuService.copy(this.data);
				break;

			case 'Insert':
				this.contextMenuService.insert(this.data);
				break;

			case 'InsertLineAbove':
				this.contextMenuService.insertLineAbove(this.data);
				break;

			case 'InsertColumnLeft':
				this.contextMenuService.insertColumnLeft(this.data);
				break;

			case 'DeleteCells':
				this.contextMenuService.insertCells(this.data);
				break;

			case 'DeleteLine':
				this.contextMenuService.deleteLine(this.data);
				break;

			case 'DeleteColumn':
				this.contextMenuService.deleteColumn(this.data);
				break;

			case 'InsertCells':
				this.contextMenuService.deleteCells(this.data);
				break;
		}

		this.close();
	}
}
