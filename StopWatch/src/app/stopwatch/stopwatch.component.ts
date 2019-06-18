import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div class="stop-watch">
      <div class="display">{{ Minute }}:{{ Second }}:{{ MiliSecond }}</div>
      <button class="control" (click)="controlClick()">{{ action }}</button>
    </div>
  `,
  styles: [
  `
      @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

      .stop-watch {
        font-family: 'Source Code Pro', monospace;
        text-align: center;
        font-size: 3em;
        padding: 30px;
      }

      .control {
        width: 300px;
        padding: 5px;
        margin-top: 15px;
        font-size: 36px;
        font-weight: bold;
        border: 2px solid #f44336;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
      }

      .control:hover {
        background: #f44336;
        color: aliceblue;
      }
    `
  ]
  })
export class StopwatchComponent implements OnInit {
  private state: string;

  public action: string;

  private milisecond: number;

  private second: number;

  private minute: number;

  private timeIntervalID: any;

  ngOnInit() {
    this.milisecond = 0;
    this.second = 0;
    this.minute = 0;
    this.state = 'stop';
    this.action = 'Start';
  }

  increaseTime = () => {
    this.milisecond += 1;
    if (this.milisecond === 100) {
      this.milisecond = 0;
      this.second += 1;
    }
    if (this.second === 60) {
      this.second = 0;
      this.minute += 1;
    }
  };

  startWatch() {
    this.timeIntervalID = setInterval(this.increaseTime, 10);
  }

  stopWatch() {
    clearInterval(this.timeIntervalID);
  }

  controlClick() {
    if (this.state === 'stop') {
      this.startWatch();
      this.state = 'run';
      this.action = 'Stop';
    } else if (this.state === 'run') {
      this.stopWatch();
      this.state = 'stop';
      this.action = 'Start';
    }
  }

  get Minute() {
    return this.minute < 10 ? `0${this.minute}` : this.minute;
  }

  get Second() {
    return this.second < 10 ? `0${this.second}` : this.second;
  }

  get MiliSecond() {
    return this.milisecond < 10 ? `0${this.milisecond}` : this.milisecond;
  }
}
