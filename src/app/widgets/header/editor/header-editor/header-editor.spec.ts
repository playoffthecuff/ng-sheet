import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEditor } from './header-editor';

describe('HeaderEditor', () => {
	let component: HeaderEditor;
	let fixture: ComponentFixture<HeaderEditor>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderEditor],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderEditor);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
