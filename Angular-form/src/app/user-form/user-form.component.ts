import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

class User {
  constructor(
    public userid: string,
    public password: string,
    public role: string,
    public name?: string
  ) {}
}
@Component({
  selector: 'app-user-form',
  template: `
    <form class="container">
      <h2>Template-driven forms Exam</h2>
      <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
        <div class="form-group">
          <label for="userid">User id</label>
          <input
            type="text"
            name="userid"
            class="form-control"
            [(ngModel)]="user.userid"
            #userid="ngModel"
            pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
            required
          />
          <em *ngIf="userid.errors?.pattern && userid.touched" class="alert">
            User id는 email 형식으로 입력하세요!
          </em>
          <em *ngIf="userid.errors?.required && userid.touched" class="alert">
            User id로 사용할 email을 입력하세요!
          </em>
          <em
            >(touched: {{ userid.touched }} | pristine: {{ userid.pristine }} | invalid:
            {{ userid.invalid }})</em
          >
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            [(ngModel)]="user.password"
            #password="ngModel"
            pattern="[a-zA-Z0-9]{4,10}"
            required
          />
          <em *ngIf="password.errors?.pattern && password.touched" class="alert">
            Password는 영문 또는 숫자로 4 이상 10자리 이하로 입력하세요!
          </em>
          <em *ngIf="password.errors?.required && password.touched" class="alert">
            Password를 입력하세요!
          </em>
          <em>
            (touched: {{ password.touched }} | pristine: {{ password.pristine }} | invalid:
            {{ password.invalid }})
          </em>
        </div>
        <div class="form-group">
          <label for="role">Role</label>
          <select class="form-control" name="role" [(ngModel)]="user.role" required>
            <option *ngFor="let role of roles; let i = index" [value]="role">
              {{ role }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="username">User name</label>
          <input type="text" name="name" class="form-control" [(ngModel)]="user.name" />
        </div>

        <button type="submit" class="btn btn-success" [disabled]="userForm.invalid">Submit</button>
      </form>
    </form>
  `,
  styles: [
  `
      /* user-form/user-form.component.css */
      .alert {
        color: red;
      }

      input.ng-touched.ng-invalid {
        background-color: #ff6666;
      }
    `
  ]
  })
export class UserFormComponent implements OnInit {
  user: User;

  roles: string[];

  constructor() {}

  ngOnInit() {
    this.roles = ['Admin', 'Developer', 'Guest'];
    this.user = new User('', '', this.roles[0]);
  }

  onSubmit(userForm: NgForm) {
    console.log(this.user);
    console.log(userForm);
  }
}
