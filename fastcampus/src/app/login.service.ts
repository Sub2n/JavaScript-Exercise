import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
  })
export class LoginService {
  isLogin = true;

  constructor() {}

  getLoginStatus(): Observable<boolean> {
    return of(this.isLogin);
  }

  setLoginStatus(state: boolean) {
    this.isLogin = state;
  }
}
