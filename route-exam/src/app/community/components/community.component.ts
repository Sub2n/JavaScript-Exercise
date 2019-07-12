import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  template: `
    <app-navigation></app-navigation>
    <app-community-navigation></app-community-navigation>
    <p>
      community works!
    </p>
  `,
  styles: []
  })
export class CommunityComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
