import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellInput } from './cell-input';

describe('CellInput', () => {
	let component: CellInput;
	let fixture: ComponentFixture<CellInput>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CellInput],
		}).compileComponents();

		fixture = TestBed.createComponent(CellInput);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
