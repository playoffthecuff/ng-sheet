import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiButton, TuiHint, TuiIcon } from '@taiga-ui/core';
import { TuiItemGroup } from '@taiga-ui/layout';
import { ColorPicker } from './color-picker/color-picker';
import { BaseIconsService } from './services/base-icons-service/base-icons-service';
import { MenuIconsService } from './services/menu-icons-service/menu-icons-service';

@Component({
	selector: 'app-format-vidget',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ColorPicker, TuiItemGroup, TuiButton, TuiIcon, TuiHint],
	providers: [BaseIconsService, MenuIconsService],
	templateUrl: './format-vidget.html',
	styleUrl: './format-vidget.less',
})
export class FormatVidget {
	public baseIconsService: BaseIconsService = inject(BaseIconsService);
	public menuIconsService: MenuIconsService = inject(MenuIconsService);
}
