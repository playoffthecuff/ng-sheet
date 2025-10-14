import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashTest } from './trash-test';

describe('TrashTest', () => {
	let component: TrashTest;
	let fixture: ComponentFixture<TrashTest>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TrashTest],
		}).compileComponents();

		fixture = TestBed.createComponent(TrashTest);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
