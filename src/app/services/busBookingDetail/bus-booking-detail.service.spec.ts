import { TestBed } from '@angular/core/testing';

import { BusBookingDetailService } from './bus-booking-detail.service';

describe('BusBookingDetailService', () => {
  let service: BusBookingDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusBookingDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
