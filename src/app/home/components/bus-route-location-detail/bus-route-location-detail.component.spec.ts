import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRouteLocationDetailComponent } from './bus-route-location-detail.component';

describe('BusRouteLocationDetailComponent', () => {
  let component: BusRouteLocationDetailComponent;
  let fixture: ComponentFixture<BusRouteLocationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRouteLocationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRouteLocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
