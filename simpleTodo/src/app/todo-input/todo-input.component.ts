import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" placeholder="enter Todo" (keyup.enter)="addTodo()" [(ngModel)]="content" />
  `,
  styles: [
  `
      input {
        padding: 5px;
        margin-left: 40px;
      }
    `
  ]
  })
export class TodoInputComponent {
  @Output() add = new EventEmitter();

  content: string;

  addTodo() {
    if (this.content !== '') this.add.emit(this.content.trim());
    this.content = '';
  }
}
