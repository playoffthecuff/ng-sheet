import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({ name: 'progressToColor' })
export class ProgressToColorPipe implements PipeTransform {
	transform(
		progress: number,
		alpha = 100,
	): `rgb(${number} ${number} ${number} / ${number}%)` {
		progress = Math.min(100, Math.max(0, progress));

		let r, g, b;

		if (progress <= 50) {
			const t = progress / 50;
			r = Math.round(this.interpolate(255, 180, t));
			g = Math.round(this.interpolate(0, 180, t));
			b = 0;
		} else {
			const t = (progress - 50) / 50;
			r = Math.round(this.interpolate(180, 0, t));
			g = Math.round(this.interpolate(180, 180, t));
			b = 0;
		}

		return `rgb(${r} ${g} ${b} / ${alpha}%)`;
	}

	private interpolate = (a: number, b: number, t: number) => a + (b - a) * t;
}
