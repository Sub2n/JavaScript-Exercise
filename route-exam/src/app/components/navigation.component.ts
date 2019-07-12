import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a
        routerLink="/"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active current"
        >오늘의 집</a
      >
      <a
        routerLink="/community"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active current"
        >커뮤니티</a
      >
      <a
        routerLink="/store"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active current"
        >스토어</a
      >
      <a
        routerLink="/login"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active current"
        >로그인</a
      >
      <a
        routerLink="/signup"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active current"
        >회원가입</a
      >
    </nav>
  `,
  styles: []
  })
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
