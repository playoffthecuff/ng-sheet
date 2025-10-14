import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({ name: 'dateToDayPart' })
export class DateToDayPartPipe implements PipeTransform {
	transform(d: Date) {
		const x = d.getHours();
		return (
			[
				{ start: 23, end: 4, name: $localize`night` },
				{ start: 4, end: 10, name: $localize`morning` },
				{ start: 10, end: 17, name: $localize`day` },
				{ start: 17, end: 23, name: $localize`evening` },
			].find((v) => x >= v.start && x < v.end)?.name ?? $localize`day`
		);
	}
}
