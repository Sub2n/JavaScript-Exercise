import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user.interface';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title"></app-header>
    <ul>
      <li>id : {{ user.id }}</li>
      <li>name : {{ user.name }}</li>
      <li>admin : {{ user.admin }}</li>
    </ul>
  `,
  styles: []
  })
export class HomeComponent implements OnInit {
  title = 'User Information';

  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
