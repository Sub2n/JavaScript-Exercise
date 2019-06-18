import { Component } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  template: `
    <app-todo-input (add)="addTodo($event)"></app-todo-input>
    <app-todo-list
      [todos]="todos"
      (complete)="completdTodo($event)"
      (remove)="removeTodo($event)"
    ></app-todo-list>
    <pre>{{ todos | json }}</pre>
  `,
  styles: []
  })
export class AppComponent {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ];

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }

  addTodo(content: string) {
    this.todos = [{ id: this.generateId(), content, completed: false }, ...this.todos];
  }

  completdTodo(id: number) {
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
