import {
  Component, Input, Output, EventEmitter, OnInit
} from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <input
          class="checkbox"
          type="checkbox"
          [checked]="todo.completed"
          (change)="completeTodo(todo.id)"
        />
        <input
          class="edit"
          type="text"
          *ngIf="editable && editID === todo.id"
          (keyup.enter)="editContent(todo.id)"
          [(ngModel)]="content"
        />
        <span
          *ngIf="!editable || editID !== todo.id"
          [ngStyle]="{ 'text-decoration': todo.completed ? 'line-through' : 'none' }"
          >{{ todo.content }}</span
        >
        <button class="btn-remove" (click)="removeTodo(todo.id)">삭제</button>
        <button class="btn-edit" (click)="editContent(todo.id)">
          {{ editable && editID === todo.id ? '확인' : '수정' }}
        </button>
      </li>
    </ul>
  `,
  styles: [
  `
      ul {
        list-style: none;
        width: 21vw;
        padding-left: 0;
        min-width: 360px;
      }
      span {
        margin: 0 10px;
      }
      li {
        width: 100%;
        height: 30px;
      }
      button {
        background: none;
        border: 1px solid black;
        border-radius: 5px;
        height: 30px;
      }

      .btn-remove,
      .btn-edit {
        float: right;
      }

      .checkbox {
        position: relative;
        top: 5px;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0;
        padding: 10px;
        background: none;
        border: 1px solid #181818;
        border-radius: 5px;
      }

      .edit {
        width: 12vw;
        padding: 5px;
        margin-left: 10px;
      }
    `
  ]
  })
export class TodoListComponent implements OnInit {
  editable: boolean;

  editID: number;

  content: string;

  @Input() todos: Todo[];

  @Output() toggle = new EventEmitter();

  @Output() remove = new EventEmitter();

  @Output() edit = new EventEmitter();

  ngOnInit() {
    this.editable = false;
    this.editID = NaN;
  }

  completeTodo(id: number) {
    this.toggle.emit(id);
  }

  removeTodo(id: number) {
    this.remove.emit(id);
  }

  editContent(id: number) {
    this.editable = !this.editable;
    this.editID = id;
    if (this.content && this.content.trim() !== '') this.edit.emit({ id, content: this.content });
    this.content = '';
  }
}
