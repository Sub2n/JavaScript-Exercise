import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <input
          id="{{ todo.id }}"
          type="checkbox"
          [checked]="todo.completed"
          (change)="completeTodo(input.id)"
          #input
        />
        <span [ngStyle]="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }">
          {{ todo.content }}</span
        >
        <button id="{{ todo.id }}" (click)="removeTodo(btn.id)" #btn>X</button>
      </li>
    </ul>
  `,
  styles: [
  `
      ul {
        list-style: none;
      }
      span {
        margin: 0 10px;
      }
    `
  ]
  })
export class TodoListComponent {
  @Input() todos: Todo[];

  @Output() complete = new EventEmitter();

  @Output() remove = new EventEmitter();

  completeTodo(id: string) {
    this.complete.emit(+id);
  }

  removeTodo(id: string) {
    this.remove.emit(+id);
  }
}
