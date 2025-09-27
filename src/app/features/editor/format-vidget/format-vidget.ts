import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiButton, TuiHint, TuiIcon } from '@taiga-ui/core';
import { TuiItemGroup } from '@taiga-ui/layout';
import { ColorText } from './color-text/color-text';
import { FormatVidgetService } from './format-vidget-service/format-vidget-service';

@Component({
	selector: 'app-format-vidget',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ColorText, TuiItemGroup, TuiButton, TuiIcon, TuiHint],
	providers: [FormatVidgetService],
	templateUrl: './format-vidget.html',
	styleUrl: './format-vidget.less',
})
export class FormatVidget {
	public formatVidgetService: FormatVidgetService = inject(FormatVidgetService);
}
