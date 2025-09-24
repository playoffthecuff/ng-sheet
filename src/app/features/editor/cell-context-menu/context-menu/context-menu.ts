import {
	ChangeDetectionStrategy,
	Component,
	inject,
	Input,
} from '@angular/core';
import { TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { TuiDataListDropdownManager } from '@taiga-ui/kit';
import { ContextMenuService } from '../context-menu-service/context-menu-service';

@Component({
	selector: 'app-context-menu',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TuiIcon, TuiDataList, TuiDropdown, TuiDataListDropdownManager],
	templateUrl: './context-menu.html',
	styleUrl: './context-menu.less',
})
export class ContextMenu {
	@Input() data: { i: number; j: number } | undefined;
	@Input() close: (() => void) | undefined;

	public contextMenuService: ContextMenuService = inject(ContextMenuService);
}
