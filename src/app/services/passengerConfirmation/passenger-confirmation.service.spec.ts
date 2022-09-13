import { TestBed } from '@angular/core/testing';

import { PassengerConfirmationService } from './passenger-confirmation.service';

describe('PassengerConfirmationService', () => {
  let service: PassengerConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
