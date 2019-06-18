import { Component, OnInit } from '@angular/core';
import { Clock } from '../clock';

@Component({
  selector: 'app-analog',
  template: `
    <div class="analog-clock">
      <div class="hour hand" [ngStyle]="{ transform: hourRotate() }"></div>
      <div class="minute hand" [ngStyle]="{ transform: minuteRotate() }"></div>
      <div class="second hand" [ngStyle]="{ transform: secondRotate() }"></div>
      <div class="center-circle"></div>
    </div>
  `,
  styles: [
  `
      @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

      .analog-clock {
        position: relative;
        margin: 100px auto 0;
        width: 200px;
        height: 200px;
        background-color: aliceblue;
        border-radius: 50%;
      }

      .hand {
        position: absolute;
        left: 50%;
        width: 1px;
        height: 100px;
        /* 자바스크립트에 의해 덮어써진다. */
        /* transform: translate3d(-50%, 0, 0); */
        transform-origin: 100% 100%;
      }

      .hour {
        background-color: #f44336;
      }

      .minute {
        background-color: #3f51b5;
      }

      .second {
        background-color: #9e9e9e;
      }

      .center-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 12px;
        height: 12px;
        background-color: black;
        border-radius: 50%;
      }
    `
  ]
  })
export class AnalogComponent extends Clock {
  hourRotate() {
    return `rotate(${(360 / 12) * this.hour + ((360 / 60) * this.minute) / 60}deg)`;
  }

  minuteRotate() {
    return `rotate(${(360 / 60) * this.minute + ((360 / 60) * this.second) / 60}deg)`;
  }

  secondRotate() {
    return `rotate(${(360 / 60) * this.second}deg)`;
  }
}
