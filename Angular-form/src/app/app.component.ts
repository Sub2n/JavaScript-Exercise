import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <app-user-form></app-user-form>
  `
  })
export class AppComponent {
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
