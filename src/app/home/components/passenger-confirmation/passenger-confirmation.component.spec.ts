import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerConfirmationComponent } from './passenger-confirmation.component';

describe('PassengerConfirmationComponent', () => {
  let component: PassengerConfirmationComponent;
  let fixture: ComponentFixture<PassengerConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
