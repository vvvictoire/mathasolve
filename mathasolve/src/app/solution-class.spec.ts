import { SolutionClass } from './solution-class';

describe('SolutionClass', () => {
  it('should create an instance', () => {
    expect(new SolutionClass([0,0], 0, ["+"])).toBeTruthy();
  });

  it('calculates 1 + 2', () => {
    expect(new SolutionClass([1,2], 0, ["+"]).result).toBe(3);
  });

  it('calculates  1 + 2 + 3', () => {
    expect(new SolutionClass([1,2,3], 0, ["+", "+"]).result).toBe(6);
  });

  it('calculates 2 × 3 + 4', () => {
    expect(new SolutionClass([2,3,4], 0, ["*", "+"]).result).toBe(10);
  });

  it('calculates (2 + 3) × 4', () => {
    expect(new SolutionClass([2,3,4], 0, ["+", "*"]).result).toBe(20);
  });

  it('calculates 0 / 0 and gives NaN', () => {
    expect(new SolutionClass([0,0], 0, ["/"]).result).toBeNaN();
  });

  it('calculates 1 / 0 and gives PositiveInfinity', () => {
    expect(new SolutionClass([1,0], 0, ["/"]).result).toBePositiveInfinity();
  });

  it('calculates -1 + 1', () => {
    expect(new SolutionClass([-1, 1], 0, ["+"]).result).toBe(0);
  });

  it('calculates -1 - -1', () => {
    expect(new SolutionClass([-1, -1], 0, ["-"]).result).toBe(0);
  });

  it('calculates -1 + 2', () => {
    expect(new SolutionClass([-1, 2], 0, ["+"]).result).toBe(1);
  });

  it('calulates -1 × 2', () => {
    expect(new SolutionClass([-1, 2], 0, ["*"]).result).toBe(-2);
  });

  it('calculates -1 / 0', () => {
    expect(new SolutionClass([-1, 0], 0, ["/"]).result).toBeNegativeInfinity();
  });

  it('calculates 1+1 without modifying the original arrays', () => {
    let solution = new SolutionClass([1,1], 0, ["+"]);
    expect(solution.result).toBe(2);
    expect(solution.numbers).toEqual([1,1])
    expect(solution.operators).toEqual(["+"]);
  });

  it('computes the score of a simple operation', () => {
    expect(new SolutionClass([1,1], 0, ["+"]).score).toBe(1);
    expect(new SolutionClass([1,1], 0, ["-"]).score).toBe(2);
    expect(new SolutionClass([1,1], 0, ["*"]).score).toBe(1);
    expect(new SolutionClass([1,1], 0, ["/"]).score).toBe(3);
  })

  it('computes the score of a more complex solution', () => {
    expect(new SolutionClass([1,1,1], 0, ["+","*"]).score).toBe(2);
    expect(new SolutionClass([1,1,1], 0, ["+","-"]).score).toBe(3);
    expect(new SolutionClass([1,1,1], 0, ["+","/"]).score).toBe(4);
    expect(new SolutionClass([1,1,1], 0, ["-","/"]).score).toBe(5);
  })

  it('computes the score of a 4-operation', () => {
    expect(new SolutionClass([1,1,1,1,1], 0, ["/", "*", "+", "-"]).score).toBe(13);
  })
});
