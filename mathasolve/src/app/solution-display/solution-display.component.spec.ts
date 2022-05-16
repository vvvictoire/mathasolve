import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDisplayComponent } from './solution-display.component';
import { SolutionServiceService } from '../solution-service.service';

describe('SolutionDisplayComponent', () => {
  let component: SolutionDisplayComponent;
  let fixture: ComponentFixture<SolutionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('creates a solution', () => {
    let solution_generator = new SolutionDisplayComponent(new SolutionServiceService());
  })
});
