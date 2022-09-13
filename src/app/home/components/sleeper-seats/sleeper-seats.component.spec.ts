import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleeperSeatsComponent } from './sleeper-seats.component';

describe('SleeperSeatsComponent', () => {
  let component: SleeperSeatsComponent;
  let fixture: ComponentFixture<SleeperSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleeperSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleeperSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
