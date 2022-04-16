import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css']
})
export class NumberDisplayComponent implements OnInit {
  target_number: number = 0;
  numbers: number[] = new Array();
  NUMBER_OF_NUMBERS = 5;

  random(minimum: number, maximum: number): number {
    return  Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;;
  };

  constructor(private optionService: OptionsService) {
    this.target_number = this.random(1, optionService.getMaxTargetNumber());
    let max_numbers = this.optionService.getMaxNumbers();
    for (let i = 0; i < max_numbers.length; i++){
      this.numbers.push(this.random(1, max_numbers[i]));
    }
   }

  ngOnInit(): void {
  }

}
