import { TestBed } from '@angular/core/testing';

import { BusRouteLocationDetailService } from './bus-route-location-detail.service';

describe('BusRouteLocationDetailService', () => {
  let service: BusRouteLocationDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusRouteLocationDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
