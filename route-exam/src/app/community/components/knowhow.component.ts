import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowhow',
  template: `
    <app-navigation></app-navigation>
    <app-community-navigation></app-community-navigation>
    <p>
      knokhow works!
    </p>
  `,
  styles: []
  })
export class KnowhowComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
