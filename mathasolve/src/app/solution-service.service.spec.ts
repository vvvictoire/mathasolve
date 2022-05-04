import { TestBed } from '@angular/core/testing';

import { SolutionServiceService } from './solution-service.service';

describe('SolutionServiceService', () => {
  let service: SolutionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create some arrays', () => {
    let results = new Array();
    service.permutations(2, [1,2],results);
    expect(results).toContain([2,1], [1,2]);
  })
});
