import {
  Component, Output, EventEmitter, Input
} from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    <div>
      <label>A: </label>
      <input type="text" (input)="sendC.emit(content)" [(ngModel)]="content" />
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
  @Output() sendC = new EventEmitter();

  @Input() content: string;
}
