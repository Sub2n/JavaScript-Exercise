import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-a (sendC)="sendB($event)" [content]="stringToA"></app-a>
    <app-b [fromA]="stringToB" (sendA)="sendA($event)"></app-b>
  `
  })
export class AppComponent {
  stringToB: string;

  stringToA: string;

  sendB(content: string) {
    this.stringToB = content;
  }

  sendA(content: string) {
    this.stringToA = content;
  }
}
