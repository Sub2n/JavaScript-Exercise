import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  template: `
    <app-navigation></app-navigation>
    <app-store-navigation></app-store-navigation>
    <p>
      ranking works!
    </p>
  `,
  styles: []
  })
export class RankingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
