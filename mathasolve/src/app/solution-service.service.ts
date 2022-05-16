import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionServiceService {

  generatePermutations(array: number[]): number[][] {
    return this.permutations(array);
  }

  generateOperations(array: string[]): string[][] {
    return this.cartesianProduct(array);
  }

  cartesianProduct<T>(...allEntries: T[][]): T[][] {
    return allEntries.reduce<T[][]>(
      (results, entries) =>
        results
          .map(result => entries.map(entry => result.concat([entry])))
          .reduce((subResults, result) => subResults.concat(result), []),
      [[]]
    )
  }

  permutations(arr: any[]): any[] {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          this.permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
            item,
            ...val,
          ])
        ),
      []
    );
  };

  constructor() {
  }
}
