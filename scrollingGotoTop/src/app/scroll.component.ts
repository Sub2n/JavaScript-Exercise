import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  template: `
    <div class="scoll-icon fa fa-angle-double-up" show-scroll></div>
  `,
  styles: [
  `
      .scoll-icon {
        position: fixed;
        left: 50%;
        bottom: 20px;
        font-size: 36px;
        cursor: pointer;
        animation: glow 4s infinite;
        display: none;
      }

      @keyframes glow {
        0% {
          opacity: 1;
        }

        50% {
          opacity: 0.3;
          transform: translateY(10px);
        }
      }
    `
  ]
  })
export class ScrollComponent {}
