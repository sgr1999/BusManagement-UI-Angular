import { TestBed } from '@angular/core/testing';

import { BusDepoService } from './bus-depo.service';

describe('BusDepoService', () => {
  let service: BusDepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusDepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
