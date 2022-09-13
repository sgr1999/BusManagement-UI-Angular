import { TestBed } from '@angular/core/testing';

import { SourceDestinationService } from './source-destination.service';

describe('SourceDestinationService', () => {
  let service: SourceDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
