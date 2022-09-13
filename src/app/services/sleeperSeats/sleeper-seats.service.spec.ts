import { TestBed } from '@angular/core/testing';

import { SleeperSeatsService } from './sleeper-seats.service';

describe('SleeperSeatsService', () => {
  let service: SleeperSeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleeperSeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
