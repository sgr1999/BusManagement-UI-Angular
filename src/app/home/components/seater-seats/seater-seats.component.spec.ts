import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaterSeatsComponent } from './seater-seats.component';

describe('SeaterSeatsComponent', () => {
  let component: SeaterSeatsComponent;
  let fixture: ComponentFixture<SeaterSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaterSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaterSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
