import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingComponent } from './bus-booking.component';

describe('BusBookingComponent', () => {
  let component: BusBookingComponent;
  let fixture: ComponentFixture<BusBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
