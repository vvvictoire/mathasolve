import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  maxMinutes: number = 5;
  maxNumbers: number[] = [4, 6, 8, 12, 20];
  maxTargetNumber: number = 99;

  getMaxTime() : number {
    return (60 * this.maxMinutes);
  }

  constructor() { }
}
