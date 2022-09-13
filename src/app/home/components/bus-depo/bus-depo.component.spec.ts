import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDepoComponent } from './bus-depo.component';

describe('BusDepoComponent', () => {
  let component: BusDepoComponent;
  let fixture: ComponentFixture<BusDepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDepoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusDepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
