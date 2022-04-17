import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css']
})
export class NumberDisplayComponent implements OnInit {
  targetNumber: number = 0;
  numbers: number[] = new Array();
  options: OptionsService;

  random(minimum: number, maximum: number): number {
    return  Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;;
  };

  reroll(): void {
    this.numbers = new Array();
    this.targetNumber = this.random(1, this.options.getMaxTargetNumber());
    let maxNumbers = this.options.getMaxNumbers();
    for (let i = 0; i < maxNumbers.length; i++){
      this.numbers.push(this.random(1, maxNumbers[i]));
    }
  }

  constructor(private optionService: OptionsService) {
    this.options = optionService;
   }

  ngOnInit(): void {
    this.reroll();
  }

}
