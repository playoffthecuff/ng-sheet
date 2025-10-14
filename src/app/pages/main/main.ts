import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth-service';
import { LayoutService } from '../../core/services/layout/layout-service';
import { FileManager } from '../../features/file-manager/file-manager';
import { Intro } from '../../shared/ui/intro/intro';

@Component({
	selector: 'app-main',
	imports: [Intro, RouterLink, AsyncPipe, FileManager],
	templateUrl: './main.html',
	styleUrl: './main.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {
	private readonly ls = inject(LayoutService);
	protected readonly as = inject(AuthService);
	protected readonly user$ = this.as.user$;
	constructor() {
		this.ls.footerVariant = 'about';
		this.ls.headerVariant = 'search';
	}
}
