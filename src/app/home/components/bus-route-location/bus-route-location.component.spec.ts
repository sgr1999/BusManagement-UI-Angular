import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRouteLocationComponent } from './bus-route-location.component';

describe('BusRouteLocationComponent', () => {
  let component: BusRouteLocationComponent;
  let fixture: ComponentFixture<BusRouteLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRouteLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRouteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
