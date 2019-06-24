import { Component } from '@angular/core';
import { toastT } from './toast.type';
import { Toast } from './toast.interface';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>JavaScript Toast</h1>

    <button class="show-success" (click)="addToast($event.target.innerText.toLowerCase())">
      Success
    </button>
    <button class="show-error" (click)="addToast($event.target.innerText.toLowerCase())">
      Error
    </button>
    <button class="show-warning" (click)="addToast($event.target.innerText.toLowerCase())">
      Warning
    </button>
    <app-toast [toasts]="toasts" (remove)="removeByIndex($event)"></app-toast>
    <pre>{{ toasts | json }}</pre>
  `,
  styles: [
  `
      h1 {
        color: #db5b33;
        font-weight: 300;
        text-align: center;
      }
      button {
        border-radius: 5px;
        border-width: 1px;
        background-color: white;
        margin: 0 2px;
      }
    `
  ]
  })
export class AppComponent {
  public toasts: Toast[] = [];

  addToast(type: toastT) {
    const isSuccess: toastT = 'success';
    this.toasts = [
      ...this.toasts,
      {
        class: `toast toast-${type}`,
        heading: `${type === isSuccess ? 'Well Done!' : 'Check it out!'}`,
        message: `This is a ${type} alert`
      }
    ];

    setTimeout(() => {
      this.removeToast();
    }, 6000);
  }

  removeToast() {
    this.toasts = this.toasts.slice(1, this.toasts.length);
  }

  removeByIndex(index: number) {
    this.toasts = this.toasts.filter((toast, idx) => {
      console.log(idx !== index);
      return idx !== index;
    });
  }
}
