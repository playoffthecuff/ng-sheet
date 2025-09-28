import { TestBed } from '@angular/core/testing';

import { BaseIconsService } from './base-icons-service';

describe('FormatVidgetService', () => {
	let service: BaseIconsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(BaseIconsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
