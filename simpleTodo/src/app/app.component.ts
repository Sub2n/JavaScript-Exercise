import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-root',
  template: `
    <h1>Simple Todo</h1>
    <app-todo-input (add)="addTodo($event)"></app-todo-input>
    <app-todo-list
      [todos]="todos"
      (toggle)="toggleTodo($event)"
      (remove)="removeTodo($event)"
      (edit)="editTodo($event)"
    ></app-todo-list>
    <pre>{{ todos | json }}</pre>
  `,
  styles: [
  `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
      }
    `
  ]
  })
export class AppComponent implements OnInit {
  todos: Todo[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.get();
  }

  get() {
    this.http.get<Todo[]>('http://localhost:3000/todos').subscribe((todos) => {
      this.todos = todos;
    });
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }

  addTodo(content: string) {
    this.http
      .post<Todo[]>('http://localhost:3000/todos', {
      id: this.generateId(),
      content,
      completed: false
    })
      .subscribe(() => {
        this.get();
      });
    // this.todos = [{ id: this.generateId(), content, completed: false }, ...this.todos];
  }

  toggleTodo(id: number) {
    //  this.todos.find(todo=>todo.id === id);
    this.http
      .patch<Todo[]>(`http://localhost:3000/todos/${id}`, {
      completed: !this.todos.find(todo => todo.id === id).completed
    })
      .subscribe(() => {
        this.get();
      });
  }

  removeTodo(id: number) {
    this.http.delete<Todo[]>(`http://localhost:3000/todos/${id}`).subscribe(() => {
      this.get();
    });
    // this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(todo: any) {
    console.log(todo);
    this.http
      .patch<Todo[]>(`http://localhost:3000/todos/${todo.id}`, {
      content: todo.content
    })
      .subscribe(() => {
        this.get();
      });
  }
}
