import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { Toast } from '../toast.interface';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast-container">
      <div
        *ngFor="let toast of toasts; let i = index"
        class="{{ toast.class }}"
        [style.top.px]="i * 100"
      >
        <b class="toast-heading">{{ toast.heading }} {{ i }}</b>
        <button class="close" (click)="remove.emit(i)">X</button>
        <p>{{ toast.message }}</p>
      </div>
    </div>
  `,
  styles: [
  `
      .toast-container {
        position: relative;
      }

      .toast {
        position: absolute;
        right: 0;
        box-sizing: border-box;
        width: 300px;
        height: 100px;
        padding: 10px 15px;
        border: 1px solid transparent;
        border-radius: 4px;
        animation: move 2s both;
      }

      .toast-success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
      }

      .toast-error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }

      .toast-warning {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
      }

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1em;
        cursor: pointer;
        border: none;
        background: none;
      }

      .toast-heading {
        margin-top: 10px;
      }

      @keyframes move {
        from {
          transform: translateX(100%);
        }

        to {
          transform: translateX(0);
        }
      }
    `
  ]
  })
export class ToastComponent implements OnInit {
  @Input() toasts: Toast[];

  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
