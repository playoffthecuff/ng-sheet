import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme-service';
import { TuiButton } from '@taiga-ui/core';

@Component({
	selector: 'app-theme-switcher',
	imports: [TuiButton],
	templateUrl: './theme-switcher.html',
	styleUrl: './theme-switcher.less',
})
export class ThemeSwitcher {
	private readonly themeService = inject(ThemeService);

	protected darkMode = this.themeService.darkMode;

	protected toggle() {
		this.themeService.darkMode.update((mode) => !mode);
	}
}
