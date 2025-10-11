import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../../shared/ui/logo/logo';
import { UserMenu } from '../user-menu/user-menu';

@Component({
	selector: 'app-header',
	imports: [RouterLink, RouterLinkActive, Logo, UserMenu],
	templateUrl: './header.html',
	styleUrl: './header.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
