import {
  Component, OnInit, Output, Input, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-increase',
  template: `
    <button class="increase" (click)="increaseHanlder()">+</button>
  `,
  styles: []
  })
export class IncreaseComponent implements OnInit {
  @Output() increase = new EventEmitter<void>();

  increaseHanlder() {
    this.increase.emit();
  }

  ngOnInit() {}
}
