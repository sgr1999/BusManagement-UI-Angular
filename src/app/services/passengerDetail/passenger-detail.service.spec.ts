import { TestBed } from '@angular/core/testing';

import { PassengerDetailService } from './passenger-detail.service';

describe('PassengerDetailService', () => {
  let service: PassengerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
