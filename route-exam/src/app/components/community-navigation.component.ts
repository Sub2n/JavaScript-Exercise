import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-navigation',
  template: `
    <nav>
      <a
        routerLink="/community"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        >홈</a
      >
      <a
        routerLink="/community/photo"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        >사진</a
      >
      <a
        routerLink="/community/knowhow"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        >노하우</a
      >
    </nav>
  `,
  styles: []
  })
export class CommunityNavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
