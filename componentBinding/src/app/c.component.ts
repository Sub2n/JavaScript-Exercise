import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-c',
  template: `
    <div>
      <label>C: </label>
      <input type="text" [value]="getData()" (input)="setData($event.target.value)" />
    </div>
  `,
  styles: [
  `
      div {
        display: flex;
        height: 30vh;
        justify-content: center;
        align-items: center;
        background: pink;
      }

      input {
        width: 50vw;
        padding: 0.5rem;
        line-height: 1.5rem;
        margin-left: 0.5rem;
      }
    `
  ]
  })
export class CComponent {
  constructor(private dataService: DataService) {}

  setData(data: string) {
    this.dataService.data = data;
  }

  getData() {
    return this.dataService.data;
  }
}
