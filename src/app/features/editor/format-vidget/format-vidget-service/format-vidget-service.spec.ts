import { TestBed } from '@angular/core/testing';

import { FormatVidgetService } from './format-vidget-service';

describe('FormatVidgetService', () => {
	let service: FormatVidgetService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FormatVidgetService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
