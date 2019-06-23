import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  template: `
    <h1>JavaScript Popup</h1>

    <div class="popup" *ngIf="pop">
      <h1>JavaScript Popup</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam
      </p>
      <button class="btn-close" (click)="pop = false">X</button>
      <input type="text" (keyup.enter)="enterMessage(input)" #input />
      <button class="btn-ok" (click)="enterMessage(input)">OK</button>
      <button class="btn-cancel" (click)="pop = false">Cancel</button>
    </div>
    <div class="overlay" *ngIf="pop"></div>

    <button class="toggle-popup" (click)="pop = true">show popup</button>

    <p class="popup-message">{{ message }}</p>
  `,
  styles: [
  `
      h1 {
        color: #db5b33;
        font-weight: 300;
        text-align: center;
      }

      .popup {
        position: fixed;
        right: 0;
        left: 0;
        top: 20px;
        margin: 0 auto;
        width: 90%;
        max-width: 520px;
        min-height: 200px;
        background-color: #fff;
        padding: 12px;
        box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14),
          0 5px 24px 4px rgba(0, 0, 0, 0.12);
        z-index: 1000;
      }

      .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 999;
      }

      .btn-close {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 16px;
        border: 0;
        background: transparent;
        cursor: pointer;
      }
    `
  ]
  })
export class PopUpComponent implements OnInit {
  public pop: boolean;

  public message: string;

  constructor() {}

  ngOnInit() {
    this.pop = false;
  }

  enterMessage(input: HTMLInputElement) {
    this.message = input.value;
    this.pop = false;
  }
}
