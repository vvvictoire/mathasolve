import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  leftpad(number: number): string {
    if (number < 10) {
      return "0" + number.toString();
    }
    else {
      return number.toString();
    }
  }

  transform(numberOfSeconds: number): string {
    let minutes = Math.floor(numberOfSeconds / 60);
    let seconds = numberOfSeconds % 60;
    return minutes.toString() + ":" + this.leftpad(seconds);
  }

}
