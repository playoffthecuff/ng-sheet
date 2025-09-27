import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorText } from './color-text';

describe('ColorText', () => {
	let component: ColorText;
	let fixture: ComponentFixture<ColorText>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ColorText],
		}).compileComponents();

		fixture = TestBed.createComponent(ColorText);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
