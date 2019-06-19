import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-b',
  template: `
    <app-c></app-c>
  `
  })
export class BComponent {}
