import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRouteBusDetailComponent } from './bus-route-bus-detail.component';

describe('BusRouteBusDetailComponent', () => {
  let component: BusRouteBusDetailComponent;
  let fixture: ComponentFixture<BusRouteBusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRouteBusDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRouteBusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
