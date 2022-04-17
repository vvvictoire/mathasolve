import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  maxTime: number = 0;
  timeLeft: number = 0;
  interval: NodeJS.Timeout;
  isTimerRunning: boolean = false;

  constructor(private optionsService: OptionsService) {
    this.maxTime = optionsService.getMaxTime();
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
    }, 1000);
    this.pauseTimer();
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
    }, 1000);
    this.isTimerRunning = true;
  }

  pauseTimer(): void {
    clearInterval(this.interval);
    this.isTimerRunning = false;
  }

  resetTimer(): void {
    this.pauseTimer();
    this.timeLeft = this.maxTime;
  }

  ngOnInit(): void {
    this.timeLeft = this.maxTime;
  }

}
