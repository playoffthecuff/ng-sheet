import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetSegment } from './sheet-segment';

describe('SheetSegment', () => {
	let component: SheetSegment;
	let fixture: ComponentFixture<SheetSegment>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SheetSegment],
		}).compileComponents();

		fixture = TestBed.createComponent(SheetSegment);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
