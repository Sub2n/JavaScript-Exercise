import { OnInit } from '@angular/core';

export class Clock implements OnInit {
  protected now: Date;

  protected hour: number;

  protected minute: number;

  protected second: number;

  protected timerID: any;

  ngOnInit() {
    this.getTime();
    this.startClock();
  }

  increaseTime = () => {
    this.getTime();
    if (this.second === 60) {
      this.second = 0;
    }
    if (this.minute === 60) {
      this.minute = 0;
    }
  };

  getTime() {
    this.now = new Date();
    this.hour = this.now.getHours();
    this.minute = this.now.getMinutes();
    this.second = this.now.getSeconds();
  }

  startClock() {
    this.timerID = setInterval(this.increaseTime, 100);
  }
}
