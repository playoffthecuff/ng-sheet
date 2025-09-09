import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { Logo } from '../../shared/ui/logo/logo';

@Component({
	selector: 'app-header',
	imports: [RouterLink, RouterLinkActive, Logo],
	templateUrl: './header.html',
	styleUrl: './header.less',
})
export class Header {
	private readonly alerts = inject(TuiAlertService);
	protected activeItemIndex = 0;
	protected onClick(item: string): void {
		this.alerts.open(item).subscribe();
	}
}
