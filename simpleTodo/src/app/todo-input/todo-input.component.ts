import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" placeholder="enter Todo" (keyup.enter)="addTodo()" [(ngModel)]="content" />
  `,
  styles: [
  `
      input {
        width: 20vw;
        padding: 5px;
        min-width: 360px;
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
