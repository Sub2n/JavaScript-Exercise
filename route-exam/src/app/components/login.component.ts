import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <app-navigation></app-navigation>
    <p>
      login works!
    </p>
  `,
  styles: []
  })
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
