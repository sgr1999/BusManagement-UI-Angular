import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingDetailComponent } from './bus-booking-detail.component';

describe('BusBookingDetailComponent', () => {
  let component: BusBookingDetailComponent;
  let fixture: ComponentFixture<BusBookingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusBookingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
