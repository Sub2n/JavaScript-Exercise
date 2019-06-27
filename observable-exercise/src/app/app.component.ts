import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  Subscription, Observable, of, throwError
} from 'rxjs';
import {
  debounceTime, switchMap, map, tap, catchError
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <pre>{{ data | json }}</pre>
  `,
  styles: []
  })
export class AppComponent implements OnInit {
  data: object[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<object[]>('http://localhost:4500/todos').subscribe(v => (this.data = v));
  }
}
