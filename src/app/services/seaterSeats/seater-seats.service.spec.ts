import { TestBed } from '@angular/core/testing';

import { SeaterSeatsService } from './seater-seats.service';

describe('SeaterSeatsService', () => {
  let service: SeaterSeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeaterSeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
