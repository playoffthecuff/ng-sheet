import { DateToDayPartPipe } from './date-to-day-part-pipe';

describe('ProgressToColorPipe', () => {
	it('create an instance', () => {
		const pipe = new DateToDayPartPipe();
		expect(pipe).toBeTruthy();
	});
});
