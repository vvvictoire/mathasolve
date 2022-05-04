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

  fit('should create some arrays', () => {
    let results = new Array();
    service.permutations(2, [1,2],results);
    console.log(results);
    expect(results).toEqual([[1,2], [2,1]]);
  })
});
