import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEditor } from './footer-editor';

describe('FooterEditor', () => {
	let component: FooterEditor;
	let fixture: ComponentFixture<FooterEditor>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FooterEditor],
		}).compileComponents();

		fixture = TestBed.createComponent(FooterEditor);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
