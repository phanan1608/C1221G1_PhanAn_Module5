import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Countdown} from "../countdown";

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  countTime:Countdown = new Countdown();
  @Input()
  seconds = 11;
  @Output()
  finish = new EventEmitter<Countdown>();
  private intervalId = 0;


  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.countTime.remainingTime <= 0) {
      this.countTime.remainingTime = this.seconds;
    }
    this.finish.emit(this.countTime);

  }

  stop() {
    this.clearTimer();
    this.countTime.message = `Holding at T-${this.countTime.remainingTime} seconds`;
    this.finish.emit(this.countTime);

  }

  reset() {
    this.clearTimer();
    this.countTime.remainingTime = this.seconds;
    this.countTime.message = `Click start button to start the Countdown`;
    this.finish.emit(this.countTime);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.countTime.remainingTime -= 1;
      if (this.countTime.remainingTime === 0) {
        this.countTime.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.countTime.message = `T-${this.countTime.remainingTime} seconds and counting`;
      }
      this.finish.emit(this.countTime);
    }, 1000);
  }
}
