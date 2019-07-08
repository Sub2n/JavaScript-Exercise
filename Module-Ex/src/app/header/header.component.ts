import { Component, OnInit, Input } from '@angular/core';
import { User } from '../core/models/user.interface';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <span class="title">{{ title }}</span>
      <a class="user" href="#">{{ user.name }}</a>
    </nav>
  `,
  styles: [
  `
      nav {
        background-color: #4a4c88;
        overflow: hidden;
      }
      .title,
      .user {
        line-height: 50px;
        margin: 0 30px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .title {
        float: left;
      }
      .user {
        float: right;
        font-style: italic;
      }
    `
  ]
  })
export class HeaderComponent implements OnInit {
  @Input() title: string;

  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
