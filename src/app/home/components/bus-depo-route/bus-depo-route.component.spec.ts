import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDepoRouteComponent } from './bus-depo-route.component';

describe('BusDepoRouteComponent', () => {
  let component: BusDepoRouteComponent;
  let fixture: ComponentFixture<BusDepoRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDepoRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusDepoRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
