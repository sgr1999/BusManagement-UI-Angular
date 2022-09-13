import { TestBed } from '@angular/core/testing';

import { BusRouteLocationService } from './bus-route-location.service';

describe('BusRouteLocationService', () => {
  let service: BusRouteLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusRouteLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
