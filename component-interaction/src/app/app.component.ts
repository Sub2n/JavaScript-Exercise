import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <p [color]="color" textColor>Hello</p>
  `,
  styles: []
  })
export class AppComponent {
  color = 'red';
}
