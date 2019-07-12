import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  template: `
    <app-navigation></app-navigation>
    <app-store-navigation></app-store-navigation>
    <p>
      store works!
    </p>
  `,
  styles: []
  })
export class StoreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
