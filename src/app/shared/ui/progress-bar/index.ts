const DEFAULT_CONFIG: ProgressBarConfig = {
	BLOCK_WIDTH_PERCENT: 100,
	START_PROGRESS_PERCENT: 0,
	END_PROGRESS_PERCENT: 100,
	START_TRANSITION_TIME: 0,
	LOAD_TRANSITION_TIME: 200,
	START_DELAY_MS: 5,
	PROGRESS_LIMIT_BY_EVENTS_PERCENT: 95,
	PROGRESS_LIMIT_BY_TIMER_PERCENT: 99,
	DELAY_BEFORE_RESET_MS: 250,
	SLOW_INCREMENT_MS: 1,
	FAST_INCREMENT_MS: 5,
};
export interface ProgressBarConfig {
	BLOCK_WIDTH_PERCENT: number;
	START_PROGRESS_PERCENT: number;
	END_PROGRESS_PERCENT: number;
	START_TRANSITION_TIME: number;
	LOAD_TRANSITION_TIME: number;
	START_DELAY_MS: number;
	PROGRESS_LIMIT_BY_EVENTS_PERCENT: number;
	PROGRESS_LIMIT_BY_TIMER_PERCENT: number;
	DELAY_BEFORE_RESET_MS: number;
	SLOW_INCREMENT_MS: number;
	FAST_INCREMENT_MS: number;
}

export const PROGRESSBAR_CONFIG = new InjectionToken<ProgressBarConfig>(
	'ProgressBarConfigToken',
);

import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	InjectionToken,
	type OnDestroy,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventType, Router } from '@angular/router';
import { delayWhen, interval, Subscription, takeWhile, timer } from 'rxjs';
@Component({
	selector: 'app-progress-bar',
	imports: [],
	templateUrl: 'index.html',
	styleUrl: 'index.less',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{ provide: PROGRESSBAR_CONFIG, useValue: DEFAULT_CONFIG }],
})
export class ProgressBar implements OnDestroy {
	private readonly config = inject(PROGRESSBAR_CONFIG);
	private readonly router = inject(Router);
	private progress = signal(this.config.START_PROGRESS_PERCENT);
	private transitionTime = signal(this.config.START_TRANSITION_TIME);
	private timer: Subscription | null = null;

	protected readonly transform = computed(
		() => `translateX(${-(this.config.BLOCK_WIDTH_PERCENT - this.progress())}%)`,
	);
	protected readonly transition = computed(() => `${this.transitionTime()}ms`);

	protected navigationProgress = signal<
		'start' | 'loadBegin' | 'loadOver' | 'end'
	>('end');

	constructor() {
		this.router.events
			.pipe(
				delayWhen(() => timer(this.config.SLOW_INCREMENT_MS)),
				takeUntilDestroyed(),
			)
			.subscribe((e) => {
				if (e.type === EventType.NavigationStart) {
					this.transitionTime.set(this.config.LOAD_TRANSITION_TIME);
					this.startTimer();
				}
				if (e.type !== EventType.NavigationEnd && e.type !== EventType.Scroll)
					this.progress.update((v) =>
						Math.min(
							v + this.config.SLOW_INCREMENT_MS,
							this.config.PROGRESS_LIMIT_BY_EVENTS_PERCENT,
						),
					);
				if (
					e.type === EventType.NavigationEnd ||
					e.type === EventType.NavigationError ||
					e.type === EventType.NavigationCancel
				) {
					this.finish();
				}
			});
	}

	private stopTimer() {
		this.progress.set(this.config.END_PROGRESS_PERCENT);
		timer(this.config.DELAY_BEFORE_RESET_MS).subscribe(() => {
			this.transitionTime.set(this.config.START_TRANSITION_TIME);
			this.progress.set(this.config.START_PROGRESS_PERCENT);
		});
	}

	private startTimer(t = this.config.SLOW_INCREMENT_MS) {
		this.timer = interval(t)
			.pipe(
				takeWhile(
					() => this.progress() < this.config.PROGRESS_LIMIT_BY_TIMER_PERCENT,
				),
				delayWhen(() =>
					timer(
						Math.min(
							this.progress() - this.config.PROGRESS_LIMIT_BY_EVENTS_PERCENT,
							0,
						) * 100,
					),
				),
			)
			.subscribe({
				next: () =>
					this.progress.update((value) => {
						return Math.min(
							value +
								(value >= this.config.PROGRESS_LIMIT_BY_EVENTS_PERCENT ?
									this.config.SLOW_INCREMENT_MS
								:	this.config.FAST_INCREMENT_MS),
							this.config.PROGRESS_LIMIT_BY_EVENTS_PERCENT,
						);
					}),
				complete: () => this.stopTimer(),
			});
	}

	private finish() {
		this.stopTimer();
		this.timer?.unsubscribe();
		this.timer = null;
	}

	ngOnDestroy() {
		this.finish();
	}
}
