import { TestBed } from '@angular/core/testing';

import { MenuIconsService } from './menu-icons-service';

describe('MenuIconsService', () => {
	let service: MenuIconsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(MenuIconsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
