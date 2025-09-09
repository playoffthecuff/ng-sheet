import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TUI_DOC_ICONS } from '@taiga-ui/addon-doc/tokens';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { tuiScrollbarOptionsProvider } from '@taiga-ui/core/components/scrollbar';
import { TuiTextfield } from '@taiga-ui/core/components/textfield';
import { TuiFlagPipe } from '@taiga-ui/core/pipes/flag';
import {
	type TuiCountryIsoCode,
	type TuiLanguageName,
} from '@taiga-ui/i18n/types';
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';
import { TuiBadge } from '@taiga-ui/kit/components/badge';
import { TuiBadgedContent } from '@taiga-ui/kit/components/badged-content';
import { TuiButtonSelect } from '@taiga-ui/kit/directives/button-select';
import { capitalize } from '../../utils/utils';

@Component({
	selector: 'app-lang-switcher',
	imports: [
		ReactiveFormsModule,
		TitleCasePipe,
		TuiBadge,
		TuiBadgedContent,
		TuiButton,
		TuiButtonSelect,
		TuiDataList,
		TuiFlagPipe,
		TuiTextfield,
	],
	templateUrl: './lang-switcher.html',
	styleUrl: './lang-switcher.less',
	providers: [tuiScrollbarOptionsProvider({ mode: 'hover' })],
})
export class LangSwitcher {
	protected readonly icons = inject(TUI_DOC_ICONS);
	protected readonly switcher = inject(TuiLanguageSwitcherService);
	protected readonly language = new FormControl(
		capitalize(this.switcher.language),
	);

	protected open = false;

	public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
		['english', 'US'],
		['spanish', 'ES'],
	]);

	public readonly names: TuiLanguageName[] = [...this.flags.keys()];

	public setLang(lang: TuiLanguageName): void {
		this.language.setValue(lang);
		this.switcher.setLanguage(lang);
		this.open = false;
		location.pathname = `/${this.flags.get(lang)?.toLowerCase()}/${location.pathname.split('/').slice(2).join('/')}`;
	}
}
