import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
  })
export class LoginService {
  isLogin = false;

  constructor() {}

  getLoginStatus(): Observable<boolean> {
    return of(this.isLogin);
  }
}
