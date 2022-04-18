import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  maxMinutes: number = 5;
  getDifficulty(): string {
    return "easy";
  }

  getMinNumber(): number {
    return 0;
  }

  getMaxTargetNumber(): number {
    return 99;
  }

  getMaxNumbers() : number[] {
    return [4, 6, 8, 12, 20];
  }

  getMaxTime() : number {
    return (60 * this.maxMinutes);
  }

  constructor() { }
}
