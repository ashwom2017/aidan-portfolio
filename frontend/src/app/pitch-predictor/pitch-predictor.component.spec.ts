import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchPredictorComponent } from './pitch-predictor.component';

describe('PitchPredictorComponent', () => {
  let component: PitchPredictorComponent;
  let fixture: ComponentFixture<PitchPredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitchPredictorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitchPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
