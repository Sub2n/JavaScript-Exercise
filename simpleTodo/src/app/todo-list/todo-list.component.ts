import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <input type="checkbox" [checked]="todo.completed" (change)="completeTodo(todo.id)" />
        <span [ngStyle]="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }">{{
          todo.content
        }}</span>
        <button (click)="removeTodo(todo.id)">X</button>
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

  completeTodo(id: number) {
    this.complete.emit(id);
  }

  removeTodo(id: number) {
    this.remove.emit(id);
  }
}
