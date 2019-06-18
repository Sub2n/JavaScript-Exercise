import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="clock">
      <app-analog></app-analog>
      <app-digital></app-digital>
    </div>
  `,
  styles: []
  })
export class AppComponent {}
