import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionDisplayComponent } from './solution-display.component';

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
});
