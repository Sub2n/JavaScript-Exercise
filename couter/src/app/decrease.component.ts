import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decrease',
  template: `
    <button class="decrease" (click)="decrease.emit()">-</button>
  `,
  styles: [`
  button {
    padding: 5px 10px;
    font-size: 24px;
    border-radius: 5px;
    color: #3f51b5;
    border-color: #3f51b5;
    outline: none;
    cursor: pointer;
  }
  `]
})
export class DecreaseComponent implements OnInit {
  @Output() decrease = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
