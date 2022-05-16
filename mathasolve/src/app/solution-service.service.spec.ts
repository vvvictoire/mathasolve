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
  });

  it('does the cartesian product of 2-arrays', () => {
    let result = service.cartesianProduct([1,2], [3,4]);
    expect(result).toContain([1,3]);
    expect(result).toContain([1,4]);
    expect(result).toContain([2,3]);
    expect(result).toContain([2,4]);
  });

  it('does the cartesian product of 3 arrays', () => {
    let result = service.cartesianProduct([1,2], [3,4], [5,6]);
    expect(result).toContain([1,3,5]);
    expect(result).toContain([1,3,6]);
    expect(result).toContain([1,4,5]);
    expect(result).toContain([1,4,6]);
    expect(result).toContain([2,3,5]);
    expect(result).toContain([2,3,6]);
    expect(result).toContain([2,4,5]);
    expect(result).toContain([2,4,6]);
  });

  it('has the correct number of permutations for 5 numbers', () => {
    let results = service.permutations([1,2,3,4,5]);
    let resultsSet = new Set(results);
    expect(resultsSet.size).toBe(120);
  });

  it('has the correct number of elements in a quadruple cartesian product', () => {
    let results = service.cartesianProduct(["+", "-", "*", "/"],["+", "-", "*", "/"],["+", "-", "*", "/"],["+", "-", "*", "/"]);
    let resultsSet = new Set(results);
    expect(resultsSet.size).toBe(256);
  })
});
