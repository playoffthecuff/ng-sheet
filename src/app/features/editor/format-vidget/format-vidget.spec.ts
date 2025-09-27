import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatVidget } from './format-vidget';

describe('FormatVidget', () => {
	let component: FormatVidget;
	let fixture: ComponentFixture<FormatVidget>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FormatVidget],
		}).compileComponents();

		fixture = TestBed.createComponent(FormatVidget);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
