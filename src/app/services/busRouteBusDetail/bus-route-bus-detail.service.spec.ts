import { TestBed } from '@angular/core/testing';

import { BusRouteBusDetailService } from './bus-route-bus-detail.service';

describe('BusRouteBusDetailService', () => {
  let service: BusRouteBusDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusRouteBusDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
