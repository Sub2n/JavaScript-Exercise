import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Submit</button>
    </form>
  `
  })
export class AppComponent {}
