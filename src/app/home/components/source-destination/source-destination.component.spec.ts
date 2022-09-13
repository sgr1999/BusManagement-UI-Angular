import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDestinationComponent } from './source-destination.component';

describe('SourceDestinationComponent', () => {
  let component: SourceDestinationComponent;
  let fixture: ComponentFixture<SourceDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceDestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
