import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" placeholder="enter Todo" (keyup.enter)="addTodo(input)" #input />
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

  addTodo(input: HTMLInputElement) {
    this.add.emit(input.value);
    input.value = '';
  }
}
