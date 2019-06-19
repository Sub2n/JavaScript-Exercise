import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
    <div>
      <label>C: </label>
      <input type="text" (input)="send.emit(content)" [(ngModel)]="content" />
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
  @Input() content: string;

  @Output() send = new EventEmitter();
}
