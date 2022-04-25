import { SolutionClass } from './solution-class';

describe('SolutionClass', () => {
  it('should create an instance', () => {
    expect(new SolutionClass([0,0], 0, ["+"])).toBeTruthy();
  });

  it('computes the results of 1 + 2', () => {
    expect(new SolutionClass([1,2], 0, ["+"]).result).toBe(3);
  })
});
