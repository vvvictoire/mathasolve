import { SolutionClass } from './solution-class';

describe('SolutionClass', () => {
  it('should create an instance', () => {
    expect(new SolutionClass([0], 0, ["+"])).toBeTruthy();
  });
});
