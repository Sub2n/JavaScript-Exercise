import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-navigation',
  template: `
    <nav>
      <a routerLink="/store" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active"
        >스토어 홈</a
      >
      <a
        routerLink="/store/category"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        >카테고리</a
      >
      <a
        routerLink="/store/ranking"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active"
        >랭킹</a
      >
    </nav>
  `,
  styles: []
  })
export class StoreNavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
