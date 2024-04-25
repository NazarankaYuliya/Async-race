import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRandomCarsComponent } from './generate-random-cars.component';

describe('GenerateRandomCarsComponent', () => {
  let component: GenerateRandomCarsComponent;
  let fixture: ComponentFixture<GenerateRandomCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateRandomCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateRandomCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
