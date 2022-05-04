import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionServiceService {

  permutations (k:number, exteriorArray:number[], global:any[]): void {
    let array = exteriorArray.slice();
    if(k == 1) {
      global.push(array);
    }
    else {
      this.permutations(k - 1, array, global);
      for (let i = 0; i < k - 1; i++) {
        if (k % 2 == 0) {
          let buffer = array[i];
          array[i] = array[k - 1];
          array[k - 1] = buffer;
        }
        else {
          let buffer = array[0];
          array[0] = array[k - 1];
          array[k - 1] = buffer;
        }
        this.permutations(k - 1, array, global);
      }
    }
  }

  constructor() {
  }
}
