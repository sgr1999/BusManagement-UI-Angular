import { TestBed } from '@angular/core/testing';

import { BusDepoRouteService } from './bus-depo-route.service';

describe('BusDepoRouteService', () => {
  let service: BusDepoRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusDepoRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
