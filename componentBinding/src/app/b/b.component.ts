import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    <app-c [content]="fromA" (send)="sendA.emit($event)"></app-c>
  `
  })
export class BComponent {
  @Input() fromA: string;

  @Output() sendA = new EventEmitter();
}
