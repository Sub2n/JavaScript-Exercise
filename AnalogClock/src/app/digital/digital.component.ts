import { Component, OnInit } from '@angular/core';
import { Clock } from '../clock';

@Component({
  selector: 'app-digital',
  template: `
    <div class="digital-clock">{{ showTime() }}</div>
  `,
  styles: [
  `
      .digital-clock {
        position: absolute;
        top: 350px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        font-size: 2em;
        font-family: 'Source Code Pro', monospace;
      }
    `
  ]
  })
export class DigitalComponent extends Clock {
  showTime() {
    return `${this.hour < 10 ? '0' : ''}${this.hour}:${this.minute < 10 ? '0' : ''}${this.minute}:${
      this.second < 10 ? '0' : ''
    }${this.second}`;
  }
}
