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

  it('permutate simple arrays', () => {
    let results = service.permutations([1,2]);
    expect(results).toContain([1,2]);
    expect(results).toContain([2,1]);
  });

  it('permutate 3-arrays', () => {
    let results = service.permutations([1,2,3]);
    expect(results).toContain([1,2,3]);
    expect(results).toContain([1,3,2]);
    expect(results).toContain([2,1,3]);
    expect(results).toContain([2,3,1]);
    expect(results).toContain([3,1,2]);
    expect(results).toContain([3,2,1]);
  });

  it('does the cartesian product of simple arrays', () => {
    expect(service.cartesianProduct([1],[2])).toContain([1,2]);
  })
});
