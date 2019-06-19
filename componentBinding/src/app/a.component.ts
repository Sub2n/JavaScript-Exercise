import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-a',
  template: `
    <div>
      <label>A: </label>
      <input type="text" (input)="setData($event.target.value)" [value]="getData()" />
    </div>
  `,
  styles: [
  `
      div {
        display: flex;
        height: 30vh;
        justify-content: center;
        align-items: center;
        background: skyblue;
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
export class AComponent {
  constructor(private dataService: DataService) {}

  setData(data: string) {
    this.dataService.data = data;
  }

  getData() {
    return this.dataService.data;
  }
}
