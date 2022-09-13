import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerBookingDetailComponent } from './passenger-booking-detail.component';

describe('PassengerBookingDetailComponent', () => {
  let component: PassengerBookingDetailComponent;
  let fixture: ComponentFixture<PassengerBookingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerBookingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerBookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
