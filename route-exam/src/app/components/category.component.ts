import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
    <app-navigation></app-navigation>
    <app-store-navigation></app-store-navigation>
    <p>
      category works!
    </p>
  `,
  styles: []
  })
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
