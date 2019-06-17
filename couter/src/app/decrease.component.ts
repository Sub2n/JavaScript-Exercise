import {
  Component, OnInit, Input, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-decrease',
  template: `
    <button class="decrease" (click)="decreaseHandler()">-</button>
  `,
  styles: []
  })
export class DecreaseComponent implements OnInit {
  @Output() decrease = new EventEmitter<void>();

  decreaseHandler() {
    this.decrease.emit();
  }

  ngOnInit() {}
}
